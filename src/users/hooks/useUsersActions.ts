import { useAppDispatch } from "./store";
import { deleteUserById, UserId } from "../slice/slice";

export const useUsersActions = () => {
  const dispatch = useAppDispatch();

  const deleteUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { deleteUser };
};
