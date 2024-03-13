import axios from 'axios';
axios.defaults.baseURL = 'https://my-dreams-diary-backend.onrender.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const getAllNotes = async () => {
  const { data } = await axios('diary/getAllNotes');
  return data;
};
export const addNote = async newNote => {
  const { data } = await axios.post('diary/addNote', newNote);
  return data;
};
export const delNote = async noteId => {
  const { data } = await axios.delete(`diary/deleteNote/${noteId}`);
  return data;
};
export const updtNote = async (noteId, newData) => {
  const { data } = await axios.put(`diary/updateNote/${noteId}`, newData);
  return data;
};
