import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchNotes, addNewNote, deleteNote, updateNote } from './diaryThunk';
import { initialState } from './initialState';
import { getNotes, newNote, delNote, updtNote } from './helpers';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
const arrThunk = [fetchNotes, addNewNote, deleteNote, updateNote];
const arrTypeThunk = type => arrThunk.map(el => el[type]);

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};

// createSlice
const diarySlice = createSlice({
  name: 'diary',
  initialState: initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchNotes.fulfilled, getNotes)
      .addCase(addNewNote.fulfilled, newNote)
      .addCase(deleteNote.fulfilled, delNote)
      .addCase(updateNote.fulfilled, updtNote)
      .addMatcher(isAnyOf(...arrTypeThunk(PENDING)), handlePending)
      .addMatcher(isAnyOf(...arrTypeThunk(FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...arrTypeThunk(REJECTED)), handleRejected);
  },
});

export const diaryReducer = diarySlice.reducer;
