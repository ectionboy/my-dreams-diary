import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


export const getContacts = async () => {
  const { data } = await axios('/contacts');
  return data;
};
export const addNewContact = async newContact => {
  const { data } = await axios.post('contacts', newContact);
  return data;
};
export const delContact = async contactId => {
  const { data } = await axios.delete(`contacts/${contactId}`);
  return data;
};
