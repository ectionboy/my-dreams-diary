import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllNotes, addNote } from 'api/diary';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://652ec9c10b8d8ddac0b1e3ab.mockapi.io/';

export const fetchNotes = createAsyncThunk(
  'diary/fetchNotes', () => getAllNotes()
);
export const addNewNote = createAsyncThunk(
  'diary/addNote', async (newNoteBody) => {
		return await addNote(newNoteBody)
	}
);
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',async (contactId) => {
// 		return await delContact(contactId)}
// );
