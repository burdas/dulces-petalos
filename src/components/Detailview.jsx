import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Description from "./Description";

function DetailView({ props }) {
  return (
    <main className="container mx-auto p-8 space-y-8">
      <div className="w-full flex flex-row justify-end items-center">
        <Link
          to="/"
          className="text-white py-4 px-6 hover:scale-105 ring-1 ring-white rounded-lg transition-all duration-200 flex flex-row justify-items-end items-center gap-3"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          Volver
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[3fr,2fr] gap-2 justify-items-center items-center">
        <img src={props.imgUrl} alt={`Imagen de ${props.name}`} className="rounded-lg" />
        <Description {...props} />
      </div>
    </main>
  );
}

export default DetailView;
