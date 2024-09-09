import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = number;
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
    id: 1,
    name: "Matías Luengo",
    email: "dev@matiasluengo.com",
    github: "https://github.com/MatiasLuengo",
  },
  {
    id: 2,
    name: "Maria Lopez",
    email: "maria.lopez@example.com",
    github: "https://github.com/marialopez",
  },
  {
    id: 3,
    name: "Carlos Garcia",
    email: "carlos.garcia@example.com",
    github: "https://github.com/carlosgarcia",
  },
  {
    id: 4,
    name: "Ana Fernandez",
    email: "ana.fernandez@example.com",
    github: "https://github.com/anafernandez",
  },
  {
    id: 5,
    name: "Luis Martinez",
    email: "luis.martinez@example.com",
    github: "https://github.com/luismartinez",
  },
  {
    id: 6,
    name: "Sofia Rodriguez",
    email: "sofia.rodriguez@example.com",
    github: "https://github.com/sofiarodriguez",
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
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
