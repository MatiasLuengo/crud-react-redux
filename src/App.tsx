import ListOfUsers from "./components/ListOfUsers";
import { Toaster } from "sonner";
import imgRedux from "../public/redux.svg";
function App() {
  return (
    <>
      <main className="w-[95%] mx-auto">
        <div className="mx-auto w-full text-center flex flex-col items-center my-12">
          <h1 className="text-slate-600 font-semibold text-2xl mb-2">
            CRUD de usuarios
          </h1>
          <p className="text-slate-600">
            Pequeño proyecto donde puedes crear, editar y borrar usuarios.
            <br />
            El mismo fue generado con la idea de aplicar los conocimientos de
            manejo del estado global con:
          </p>
          <div className="flex items-center gap-x-2 mt-5">
            <img src={imgRedux} alt="Logo Redux" />
            <p className="text-[#764ABC] text-3xl font-semibold">Redux</p>
          </div>
        </div>
        <ListOfUsers />
      </main>
      <Toaster richColors />
    </>
  );
}

export default App;
