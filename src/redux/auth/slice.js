import { createSlice } from "@reduxjs/toolkit";

import {
  fetchRegisterUser,
  fetchLoginUser,
  fetchLogoutUser,
} from "./operations.js";

import { handleError, handlePending } from "../../utils/reduxUtils.js";
import { deleteAuthorizationToken } from "../../api/api.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
    isLoggedIn: false, // ← добавили
  },
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRegisterUser.pending, handlePending)
      .addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true; // ← после успешной регистрации
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRegisterUser.rejected, handleError)

      .addCase(fetchLoginUser.pending, handlePending)
      .addCase(fetchLoginUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true; // ← после успешного логина
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchLoginUser.rejected, handleError)

      .addCase(fetchLogoutUser.pending, handlePending)
      .addCase(fetchLogoutUser.fulfilled, (state) => {
        deleteAuthorizationToken();
        state.user = null;
        state.isLoggedIn = false; // ← после логаута
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchLogoutUser.rejected, handleError),
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
