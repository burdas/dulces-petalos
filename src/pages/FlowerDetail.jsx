import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailView from "../components/Detailview";

const STATUS = {
  IDLE: 0,
  OK: 1,
  ERROR: -1
}

const BASE_URL = "https://dulces-petalos.herokuapp.com/api/product/";
function FlowerDetail() {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    fetch(`${BASE_URL}${id}`)
      // Obtenermos la respuesta de la peticion
      .then((response) => response.json())
      // Convertimos la respuesta a JSON
      .then((data) => {
        setFlower(data);
        setStatus(STATUS.OK);
      })
      // Gestión de errores. De momento lo mostramos en consola.
      .catch((error) => {
        console.error(error);
        setStatus(STATUS.ERROR);
      });
  }, [id]);
  

  return (
    <>
      <Header page={flower?.name} />
      {status === STATUS.IDLE && <h1 className="text-4xl font-bold text-white text-center">Cargando...</h1>}
      {status === STATUS.OK && <DetailView props={flower} />}
      {status === STATUS.ERROR && <h1 className="text-4xl font-bold text-white text-center">No se ha podido cargar la flor</h1>}
    </>
  );
}

export default FlowerDetail;
