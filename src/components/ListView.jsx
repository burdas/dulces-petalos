import Search from "./Search";
import Item from "./Item";
import './listView.css';
import { useEffect, useState } from "react";

// URL GET para obtener el listado de flores
const FLOWERS_LIST_URL = 'https://dulces-petalos.herokuapp.com/api/product';

function ListView() {
  const [flowers, setFlowers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // El useEffect se ejecutará una vez que el componente se renderice
  useEffect(() => {
    fetch(FLOWERS_LIST_URL)
      // Obtenermos la respuesta de la peticion
      .then((response) => response.json())
      // Convertimos la respuesta a JSON
      .then((data) => setFlowers(data))
      // Gestión de errores. De momento lo mostramos en consola.
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="container mx-auto">
      <Search setSearchTerm={setSearchTerm} />
      <section className="grid mx-auto custom-grid w-full mt-8 items-center justify-items-center">
        {flowers.filter(e => e.name.includes(searchTerm) || e.binomialName.includes(searchTerm)).map((flower) => (
          <Item key={flower.id} {...flower} />
        ))}
      </section>
    </main>
  );
}

export default ListView;
