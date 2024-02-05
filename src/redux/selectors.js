export const getContacts = state => state.contacts;
export const getFilter = state => state.filter.filter;

export const nameSelector = (state) => state.profile.profile.name;
export const isLoggedIn = (state) => state.profile.isLoggedIn;


