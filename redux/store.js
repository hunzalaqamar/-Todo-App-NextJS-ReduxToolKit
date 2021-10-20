import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/reducers/todo";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
