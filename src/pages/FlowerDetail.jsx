import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DetailView from "../components/Detailview";

const BASE_URL = 'https://dulces-petalos.herokuapp.com/api/product/';
function FlowerDetail() {
  const { id } = useParams();
  const [flower, setFlower] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}${id}`)// Obtenermos la respuesta de la peticion
    .then((response) => response.json())
    // Convertimos la respuesta a JSON
    .then((data) => {
      setFlower(data);
    })
    // Gestión de errores. De momento lo mostramos en consola.
    .catch((error) => console.error(error));
    }, [id]);
    
    return (
      <>
        <Header page={flower?.name} />
        {flower && <DetailView props={flower} />}
      </>
    )
  }
  
  export default FlowerDetail