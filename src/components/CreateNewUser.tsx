import { crossSvg } from "./icons";
export default function CreateNewUser({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
      <section className="relative bg-white p-4 rounded-md w-[95%] max-w-[550px]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-1 rounded-md"
        >
          {crossSvg}
        </button>
        <h2>Crear nuevo usuario</h2>
        <form className="flex flex-col" action="">
          <input type="text" placeholder="Nombre y Apellido" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Cuenta de Github" />
          <button type="submit">Crear</button>
        </form>
      </section>
    </div>
  );
}
