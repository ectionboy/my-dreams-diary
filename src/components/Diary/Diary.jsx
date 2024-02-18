import { Container, Typography } from '@mui/material';
import React from 'react';

const Diary = () => {
  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        padding: '24px 0',
      }}
    >
      <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
        Welcome on diary page
      </Typography>
    </Container>
  );
};

export default Diary;
