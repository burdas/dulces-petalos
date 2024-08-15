import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useId } from "react";

function Search({ setSearchTerm }) {
  const searchId = useId();

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  };

  return (
      <section className="flex flex-row justify-center md:justify-end items-center mt-8 p-4">
        <div className="flex flex-row gap-4 items-center bg-neutral-800 text-white p-3 rounded-lg w-[300px]">
          <label htmlFor={searchId}>
            <MagnifyingGlassIcon className="text-white w-6 h-6 " />
          </label>
          <input
            type="text"
            id={searchId}
            onChange={handleChange}
            placeholder="Orquídea, Rosa, ..."
            className="text-md bg-transparent focus:border-none outline-none"
          />
        </div>
      </section>
  );
}

export default Search;