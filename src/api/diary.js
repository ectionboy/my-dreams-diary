import axios from 'axios';
axios.defaults.baseURL = 'https://my-dreams-diary-backend.onrender.com';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const getAllNotes = async () => {
  const { data } = await axios('diary/getAllNotes');
  return data;
};
export const addNote = async newContact => {
  const { data } = await axios.post('diary/addNote', newContact);
  return data;
};
// export const delContact = async contactId => {
//   const { data } = await axios.delete(`contacts/${contactId}`);
//   return data;
// };
