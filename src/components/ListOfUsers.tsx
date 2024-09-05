// 'use client';
import { editSvg, deleteSvg } from "./icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
  Badge,
} from "@tremor/react";

import { useAppSelector } from "../users/hooks/store";
import { useUsersActions } from "../users/hooks/useUsersActions";

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users);
  const { deleteUser } = useUsersActions();

  return (
    <section className="border-solid rounded-lg border-2 shadow-md max-w-[1050px] mx-auto mb-12">
      <div className="flex items-center justify-between px-4 pt-4">
        <Title className="font-semibold flex items-center gap-x-2">
          Usuarios<Badge>{users.length}</Badge>
        </Title>
        <button
          type="button"
          className="w-fit bg-blue-500 rounded-md text-white py-2 px-4 flex items-center hover:bg-blue-600"
        >
          Agregar usuario<span className="text-2xl font-bold ml-2">+</span>
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="">Id</TableHeaderCell>
            <TableHeaderCell className="">Nombre</TableHeaderCell>
            <TableHeaderCell className="">Email</TableHeaderCell>
            <TableHeaderCell className="flex justify-center">
              Acciones
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell className="flex items-center gap-x-2">
                <img
                  src={`https://unavatar.io/${user.email}`}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex items-center justify-center gap-x-2">
                <button className="hover:scale-110">{editSvg}</button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="hover:scale-110"
                >
                  {deleteSvg}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
