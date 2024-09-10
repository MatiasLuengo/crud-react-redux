import { configureStore, type Middleware } from "@reduxjs/toolkit";
import usersReducer from "../slice/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem(
      "_redux_state_users",
      JSON.stringify(store.getState())
    );
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;
    next(action);
    if (type === "users/deleteUserById") {
      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Usuario eliminado");
          }
        })
        .catch((err) => toast.error(err));
    }
    if (type === "users/addNewUser") {
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({
          ...payload,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Usuario creado");
          }
        })
        .catch((err) => toast.error(err));
    }

    if (type === "users/modifyUser") {
      fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
        method: "PUT",
        body: JSON.stringify({
          ...payload,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Usuario editado");
          }
        })
        .catch((err) => toast.error(err));
    }
  };

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      persistanceLocalStorageMiddleware,
      syncWithDatabaseMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
