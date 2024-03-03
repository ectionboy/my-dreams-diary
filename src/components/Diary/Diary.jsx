import { Container } from '@mui/material';
import NoneNotes from 'components/NoneNotes/NoneNotes';
import NotesList from 'components/NotesList/NotesList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../../redux/diary/diaryThunk';
import { getNotesItems } from '../../redux/selectors';

const Diary = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchNotes());
    };
    fetchData();
  }, [dispatch]);

  const notes = useSelector(getNotesItems);

console.log(notes);

  return (
    <Container
      component="section"
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      {notes.length > 0 ? <NotesList items={notes} /> : <NoneNotes />}
    </Container>
  );
};

export default Diary;
