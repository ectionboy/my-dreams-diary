import { Container } from '@mui/material';
import NoneNotes from 'components/NoneNotes/NoneNotes';
import NotesList from 'components/NotesList/NotesList';
import React from 'react';

const Diary = () => {
  const notes = [{
    _id: "123456gej",
    title: "Qwerty",
    description: "Description.......",
    imgUrl: "http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200",
    created: "2024-02-19",
    updated:"2024-02-20"
  }];
//   const notes = [];
  return (
    <Container component="section" maxWidth="xl">
      {notes.length > 0 ? <NotesList items={notes} /> : <NoneNotes />}
    </Container>
  );
};

export default Diary;
