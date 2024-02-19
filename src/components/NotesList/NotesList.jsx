import { Box } from '@mui/material';
import NoteItem from 'components/NoteItem/NoteItem';
import React from 'react';

const NotesList = ({ items }) => {
  console.log(items);
  return (
    <Box
      component="ul"
      sx={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        gap: '8px',
        maxWidth: { xs: 245, sm: 498, md: 751, lg: 1004, xl: 1257 },
        margin: '0 auto',
        padding: '24px 0',
      }}
    >
      {items.map(item => (
        <NoteItem key={item._id} item={item} />
      ))}
    </Box>
  );
};

export default NotesList;
