import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { logOut, refreshUser, signIn, signUp } from 'api/auth';


export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const data = await signUp(newUser);
      return data;
    } catch (error) {
      toast.failure(`We're sorry, something went wrong`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (logInUser, thunkAPI) => {
    try {
      const data = await signIn(logInUser);
      return data;
    } catch (error) {
      toast.failure(`You entered an incorrect login or password`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    logOut();
  } catch (error) {
    toast.failure(`We're sorry, something went wrong`);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.profile.token;
          if (!persistedToken) return thunkAPI.rejectWithValue('Unable to fetch user');

    try {

      const data  = await refreshUser(persistedToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// export const refreshUserThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.profile.token;
//     if (persistedToken === null)
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     try {
//       setToken(persistedToken);
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
