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
  // const notes2 = [
  //   {
  //     _id: '123456gej',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  //   {
  //     _id: '123456gedfbdj1',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  //   {
  //     _id: '123456gdfbej9',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  //   {
  //     _id: '123456fhfhgejf',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  //   {
  //     _id: '123456gbfhdsbejs',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  //   {
  //     _id: '123456gesdgfjn',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  //   {
  //     _id: '123456gemsdj',
  //     title: 'Qwerty',
  //     description: 'Description.......',
  //     imgUrl:
  //       'http://www.gravatar.com/avatar/e4102cc7a5201c8dd9f198cdcb3cfc6c?s=200',
  //     created: '2024-02-19',
  //     updated: '2024-02-20',
  //   },
  // ];
  //   const notes = [];
  
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
