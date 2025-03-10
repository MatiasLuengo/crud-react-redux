import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;
export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Matías Luengo",
    email: "dev@matiasluengo.com",
    github: "https://github.com/MatiasLuengo",
  },
  {
    id: "2",
    name: "Maria Lopez",
    email: "maria.lopez@example.com",
    github: "https://github.com/marialopez",
  },
  {
    id: "3",
    name: "Carlos Garcia",
    email: "carlos.garcia@example.com",
    github: "https://github.com/carlosgarcia",
  },
  {
    id: "4",
    name: "Ana Fernandez",
    email: "ana.fernandez@example.com",
    github: "https://github.com/anafernandez",
  },
];

const initialState: () => UserWithId[] = () => {
  const persistedState = localStorage.getItem("_redux_state_users");
  if (persistedState) {
    return JSON.parse(persistedState).users;
  }
  return DEFAULT_STATE;
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      return state.filter((user) => user.id !== action.payload);
    },
    modifyUser: (state, action: PayloadAction<UserWithId>) => {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser, modifyUser } = usersSlice.actions;
