import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  user: {
    username: string | null;
    token: string | null;
  };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    username: null,
    token: null,
  },
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...credentials,
          expiresInMins: 30,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData.message || 'Failed to log in');
      }

      const data = await response.json();
      await AsyncStorage.setItem('user', JSON.stringify(data));

      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to log in');
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { getState }) => {
    const state = getState() as { auth: AuthState };
    return state.auth.user;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = {
          username: action.payload.username,
          token: action.payload.token,
        };
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(logoutUser.fulfilled, (state) => {
        state.user = {
          username: null,
          token: null,
        };
      });
  },
});

export const { clearError } = authSlice.actions;

export default authSlice.reducer;
