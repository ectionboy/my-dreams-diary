import { Box } from '@mui/material';
import NoteItem from 'components/NoteItem/NoteItem';
import React from 'react';

const NotesList = ({ items }) => {
  console.log(items);
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        gap: '8px',
        padding: '24px 0',
      }}
    >
      {items.map(item => (
        <NoteItem item={item} />
      ))}
    </Box>
  );
};

export default NotesList;
