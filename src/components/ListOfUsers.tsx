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

const users: {
  id: number;
  name: string;
  email: string;
  github: string;
}[] = [
  {
    id: 1,
    name: "Juan Perez",
    email: "juan.perez@example.com",
    github: "https://github.com/juanperez",
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

export default function ListOfUsers() {
  return (
    <section className="border-solid rounded-lg border-2 shadow-md">
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <Title className="font-semibold flex items-center gap-x-2">
          Usuarios<Badge>{users.length}</Badge>
        </Title>
        <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Agregar usuario
        </button>
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="">Id</TableHeaderCell>
            <TableHeaderCell className="">Nombre</TableHeaderCell>
            <TableHeaderCell className="">Email</TableHeaderCell>
            <TableHeaderCell className="">Acciones</TableHeaderCell>
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
              <TableCell className="flex items-center gap-x-2">
                <button>{editSvg}</button>
                <button>{deleteSvg}</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
