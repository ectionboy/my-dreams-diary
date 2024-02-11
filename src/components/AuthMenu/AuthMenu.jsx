import { Box, Button, ButtonGroup } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthMenu = () => {
  const navigate = useNavigate();

  const navToLoginPage = () => {
    navigate('/login');
  };
  const navToRegPage = () => {
    navigate('/register');
  };
  return (
    <Box>
      <ButtonGroup variant="text" aria-label="Authtentificate">
        <Button
          sx={{ color: 'inherit' }}
          onClick={navToLoginPage}
          type="button"
          size="small"
        >
          Sign in
        </Button>
        <Button
          sx={{ color: 'inherit' }}
          onClick={navToRegPage}
          type="button"
          size="small"
        >
          Sign up
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default AuthMenu;
