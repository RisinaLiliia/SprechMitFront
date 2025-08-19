import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./auth/slice.js";

export const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;
