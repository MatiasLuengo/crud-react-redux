import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../slice/slice";

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("_redux_state_users", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
