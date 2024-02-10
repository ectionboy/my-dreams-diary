import { Box, Button, Container, Divider } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../../redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

const Header = () => {
  const isAuth = useSelector(isLoggedIn);

  const navigate = useNavigate();

  const navToHomePage = () => {
    navigate('/');
  };


  return (
    <>
      <Container
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '4px 0',
        }}
      >
        <Box component="nav">
          <Button
            sx={{}}
            component="a"
            onClick={navToHomePage}
            type="button"
            size="small"
          >
            Home
          </Button>
        </Box>
        {isAuth ? <UserMenu /> : <AuthMenu />}

      </Container>
      <Divider />
    </>
  );
};

export default Header;