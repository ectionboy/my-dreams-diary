export const getNotes = (state, { payload }) => {
  state.items = payload.notes;
};
export const newNote = (state, { payload }) => {
  state.items.push(payload.newNote);
};
export const delNote = (state, {payload}) => {
  state.items = state.items.filter(
    item => item.id !== payload.id
  );}
  export const updtNote = (state, {payload}) => {
    state.items = { ...state.items, ...payload };
  }