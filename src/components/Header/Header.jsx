// import { Box, Button, Container, Divider } from '@mui/material';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { isLoggedIn } from '../../redux/selectors';
// import UserMenu from 'components/UserMenu/UserMenu';
// import AuthMenu from 'components/AuthMenu/AuthMenu';

// const Header = () => {
//   const isAuth = useSelector(isLoggedIn);

//   const navigate = useNavigate();

//   const navToHomePage = () => {
//     navigate('/');
//   };

//   return (
//     <>
//       <Container
//         component="header"
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: '4px 0',
//         }}
//       >
//         <Box component="nav">
//           <Button
//             sx={{}}
//             component="a"
//             onClick={navToHomePage}
//             type="button"
//             size="small"
//           >
//             Home
//           </Button>
//         </Box>
//         {isAuth ? <UserMenu /> : <AuthMenu />}

//       </Container>
//       <Divider />
//     </>
//   );
// };

// export default Header;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import NoteIcon from '@mui/icons-material/Note';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function Header() {
// const [anchorElNav, setAnchorElNav] = React.useState(null);
// const [anchorElUser, setAnchorElUser] = React.useState(null);

// const handleOpenNavMenu = (event) => {
//   setAnchorElNav(event.currentTarget);
// };
// const handleOpenUserMenu = (event) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//   setAnchorElNav(null);
// };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <NoteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           {/* <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 300,
//               letterSpacing: '.1rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             My dreams diary
//           </Typography> */}

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <NoteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           {/* <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 500,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             My dreams diary
//           </Typography> */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;

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
