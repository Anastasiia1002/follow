import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://643ef86fb9e6d064beec2947.mockapi.io/api";

export const fetchUsers = createAsyncThunk(
  '/user/fetchAllUsers',
  async (limit, thunkAPI) => {
    try {
      const response = await axios.get('/user?page=1&limit='+limit);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUsersUpdate = createAsyncThunk(
  '/user/fetchUsersUpdate',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/user/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

