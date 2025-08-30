import { createAsyncThunk } from "@reduxjs/toolkit";
import apiClient, {
  deleteAuthorizationToken,
  setAuthorizationToken,
} from "../../api/api.js";

export const fetchRegisterUser = createAsyncThunk(
  "auth/fetchRegisterUser",
  async (newUser, thunkAPI) => {
    try {
      const { data } = await apiClient.post("/auth/register", newUser);
      const { accessToken, user } = data.data;

      setAuthorizationToken(accessToken);
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchLoginUser = createAsyncThunk(
  "auth/fetchLoginUser",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await apiClient.post("/auth/login", credentials);
      const { accessToken, user } = data.data;

      setAuthorizationToken(accessToken);
      return user;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchLogoutUser = createAsyncThunk(
  "auth/fetchLogoutUser",
  async (_, thunkAPI) => {
    try {
      await apiClient.post("/auth/logout");
      deleteAuthorizationToken();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchCurrentUser",
  async (_, thunkAPI) => {
    try {
      const { data } = await apiClient.get("/users");
      return data.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);
