import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshUserThunk,
  signUpThunk,
} from './authThunk';

const { initialState } = require('./initialState');

const onPending = state => {
  state.isLoggedIn = false;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
};

const registerAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.profile = payload.user;
  state.token = payload.token;
  state.error = null;
};

const logInAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.profile = payload.user;
  state.token = payload.token;
  state.error = null;
};

const logOutAuthFulfilled = state => {
  state.isLoggedIn = false;
  state.profile = { name: null, email: null };
  state.token = null;
  state.error = null;
};

const refreshUserAuthPending = state => {
  state.isLoggedIn = false;
  state.error = null;
};

const refreshUserAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.profile = payload;
  state.profile.avatar = "https://upload.wikimedia.org/wikipedia/uk/c/c7/Order_phoenix_3.jpg";

  state.error = null;
};

const refreshUserAuthrRejected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.error = payload;
};

const arrThunk = [signUpThunk, loginThunk, logOutThunk];

const arrTypeThunk = status => arrThunk.map(el => el[status]);

const authSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, registerAuthFulfilled)
      .addCase(loginThunk.fulfilled, logInAuthFulfilled)
      .addCase(logOutThunk.fulfilled, logOutAuthFulfilled)
      .addCase(refreshUserThunk.pending, refreshUserAuthPending)
      .addCase(refreshUserThunk.fulfilled, refreshUserAuthFulfilled)
      .addCase(refreshUserThunk.rejected, refreshUserAuthrRejected)

      .addMatcher(isAnyOf(...arrTypeThunk('pending')), onPending)
      .addMatcher(isAnyOf(...arrTypeThunk('rejected')), onRejected);
  },
});

export const authReducer = authSlice.reducer;
