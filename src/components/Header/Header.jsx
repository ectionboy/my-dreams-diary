import { Box, Button, Container, Divider } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const navToHomePage = () => {
    navigate('/');
  };
  const navToLoginPage = () => {
    navigate('/login');
  };


  return (
    <>
      <Container
        component="header"
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          padding: '8px 0',
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
          <Button
            sx={{}}
            component="a"
            onClick={navToLoginPage}
            type="button"
            size="small"
          >
            Login
          </Button>
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default Header;