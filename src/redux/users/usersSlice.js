import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, fetchUsersUpdate } from "./operations";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchUsersUpdate.pending](state) {
      state.isLoading = true;
    },
    [fetchUsersUpdate.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(el => el.id === action.meta.arg)
    },
    [fetchUsersUpdate.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
