import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api";
import slice from "./slice";

const store = configureStore({
  reducer: slice,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export default store;
