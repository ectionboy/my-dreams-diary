import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate();

    const navToHomePage = () => {
      navigate('/');
    };

  return (
  <>
   
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        padding: '48px 0',
      }}
    > 
      <Typography variant="h4">404 Not Found</Typography>
      <Button
            sx={{}}
            component="a"
            onClick={navToHomePage}
            type="button"
            variant="contained"
            size="large"
          >
            Home
          </Button>
    </Container>
  </>);
};

export default NotFound;