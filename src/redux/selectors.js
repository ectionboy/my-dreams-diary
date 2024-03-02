export const getNotesItems = state => state.diary.items;
export const getFilter = state => state.filter.filter;

export const profileSelector = (state) => state.profile.profile;
export const nameSelector = (state) => state.profile.profile.name;
export const isLoggedIn = (state) => state.profile.isLoggedIn;


