import { Button, Card, Typography } from '@mui/material';
import React from 'react';

const AddNoteItem = () => {
  return (
    <Card component="li" sx={{ width: 245, display: 'flex', justifyContent: 'center' }}>
      <Button size="small" sx={{ flexDirection: 'column', width: '100%', height: '100%' }}>
        <Typography variant="h1" component="p">
          +
        </Typography>
        <Typography variant="h2" component="p">
          Add
        </Typography>
      </Button>
    </Card>
  );
};

export default AddNoteItem;
