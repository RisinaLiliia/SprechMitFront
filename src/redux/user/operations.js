import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../api/api.js";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/users", { withCredentials: true });
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (updates, thunkAPI) => {
    try {
      const { data } = await apiClient.put("/users", updates, {
        withCredentials: true,
      });
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (passwords, thunkAPI) => {
    try {
      const { data } = await apiClient.patch("/users/password", passwords, {
        withCredentials: true,
      });
      return data.message;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);
