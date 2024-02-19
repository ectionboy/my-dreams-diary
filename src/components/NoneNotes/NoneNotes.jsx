import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const NoneNotes = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '18px',
        padding: '24px 0',
      }}
    >
      <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', md: '3rem' } }}>
        Welcome on diary page
      </Typography>
      <Button variant="contained" size="small">
        Create first note
      </Button>
    </Box>
  );
};

export default NoneNotes;
