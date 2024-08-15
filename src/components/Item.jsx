import { Link } from "react-router-dom";

function Item({ id, imgUrl, name, binomialName, price }) {
  return (
    <Link
      to={`/flower/${id}`}
      className="text-white p-4 hover:scale-105 hover:ring-1 hover:ring-white transition-all duration-200 space-y-2 w-fit rounded-lg"
    >
      <img src={imgUrl} alt={`Imagen de: ${name}`} className="rounded-lg" />
      <p className="text-xl font-bold">{name}</p>
      <div>
        <p className="text-md">{binomialName}</p>
        <p className="text-md">{price} €</p>
      </div>
    </Link>
  );
}

export default Item;
