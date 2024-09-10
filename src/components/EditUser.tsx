import { crossSvg } from "./icons";
import { useUsersActions } from "../users/hooks/useUsersActions";
import { UserWithId } from "../users/slice/slice";
export default function EditUser({
  onClose,
  user,
}: {
  onClose: () => void;
  user: UserWithId | null;
}) {
  const { editUser } = useUsersActions();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;
    editUser({ id: user?.id as string, name, email, github });
    onClose();
    form.reset();
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <section className="relative bg-white p-4 rounded-md w-[95%] max-w-[550px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-1 rounded-md"
        >
          {crossSvg}
        </button>
        <h2 className="text-xl font-semibold text-center mb-6">
          Editar usuario: {user?.name}
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="name" className="font-semibold">
            Nombre y Apellido
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border mb-4 mt-2"
            required
            placeholder="Ej. Matías Luengo"
            defaultValue={user?.name}
          />
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border mb-4 mt-2"
            required
            placeholder="Ej. dev@matiasluengo.com"
            defaultValue={user?.email}
          />
          <label htmlFor="github" className="font-semibold">
            Cuenta de Github
          </label>
          <input
            type="text"
            name="github"
            id="github"
            className="border mt-2"
            required
            placeholder="Ej. https://github.com/MatiasLuengo"
            defaultValue={user?.github}
          />
          <button
            type="submit"
            className="mt-8 w-fit mx-auto bg-blue-500 rounded-md text-white py-2 px-4 flex items-center hover:bg-blue-600"
          >
            Editar
          </button>
        </form>
      </section>
    </div>
  );
}
