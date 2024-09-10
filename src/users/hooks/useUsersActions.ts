import { useAppDispatch } from "./store";
import { deleteUserById, addNewUser, UserId, User } from "../slice/slice";

export const useUsersActions = () => {
  const dispatch = useAppDispatch();

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  const createUser = (user: User) => {
    dispatch(addNewUser(user));
  };

  return { deleteUser, createUser };
};
