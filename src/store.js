import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasksSlicesForAll.js";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
