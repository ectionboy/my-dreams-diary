import { Box, Button } from '@mui/material'
import React from 'react'
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
                  <Button
            sx={{}}
            onClick={navToLoginPage}
            type="button"
            size="small"
          >
            Sign in
          </Button>
          <Button
            sx={{}}
            onClick={navToRegPage}
            type="button"
            size="small"
          >
            Sign up
          </Button>
    </Box>
  )
}

export default AuthMenu