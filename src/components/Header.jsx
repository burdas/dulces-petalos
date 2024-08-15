import { CaretRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

function Header(props) {

  return (
    <header className="container mx-auto flex justify-items-left items-center px-4 py-6 flex-row gap-2">
      <Link to="/">
        <h1 className="text-2xl font-bold text-white">Dulces Petalos</h1>
      </Link>
      {props.page && <>
        <CaretRightIcon className="w-6 h-6 text-white" />
        <p className="text-xl font-semibold text-white">{props.page}</p>
      </>}
    </header>
  );
}

export default Header;
