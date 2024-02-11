import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../redux/selectors';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';

const Header = () => {
  const pages = ['Home', 'Diary', 'About'];

  const isAuth = useSelector(isLoggedIn);

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navToPageNavMenu = page => {
    switch (page) {
      case 'Home':
        handleCloseNavMenu();
        navigate('/');
        break;
      case 'Diary':
        handleCloseNavMenu();
        navigate('/diary');
        break;
      case 'About':
        handleCloseNavMenu();
        navigate('/about');
        break;

      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map(page => (
                  <MenuItem key={page}>
                    <Button
                      sx={{}}
                      component="a"
                      onClick={() => navToPageNavMenu(page)}
                      type="button"
                      size="small"
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map(page => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  component="a"
                  onClick={() => navToPageNavMenu(page)}
                  type="button"
                  size="small"
                >
                  {page}
                </Button>
              ))}
            </Box>

            {isAuth ? <UserMenu /> : <AuthMenu />}
          </Toolbar>
        </Container>
      </AppBar>

      <Divider />
    </>
  );
};

export default Header;
