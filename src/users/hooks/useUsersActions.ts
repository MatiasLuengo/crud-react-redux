import { useAppDispatch } from "./store";
import {
  deleteUserById,
  addNewUser,
  modifyUser,
  UserId,
  User,
  UserWithId,
} from "../slice/slice";

export const useUsersActions = () => {
  const dispatch = useAppDispatch();

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  const createUser = (user: User) => {
    dispatch(addNewUser(user));
  };

  const editUser = (user: UserWithId) => {
    dispatch(modifyUser(user));
  };

  return { deleteUser, createUser, editUser };
};
