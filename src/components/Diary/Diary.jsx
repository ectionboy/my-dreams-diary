import { Container } from '@mui/material';
import NoneNotes from 'components/NoneNotes/NoneNotes';
import React from 'react';

const Diary = () => {
  // const notes = [{qwe:1, qw:2}, {q:1}];
  const notes = [];
  return (
    <Container component="section" maxWidth="xl">
      {notes.length > 0 ? 'Notes...' : <NoneNotes />}
    </Container>
  );
};

export default Diary;
