import ItemDescription from "./ItemDescription";

function Description({
  name,
  binomialName,
  price,
  wateringsPerWeek,
  fertilizerType,
  heightInCm,
}) {
  return (
    <section className="text-white p-4">
      <h2 className="text-4xl font-bold">{name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-2">
        <ItemDescription etiqueta={"Nombre científico:"} valor={binomialName} />
        <ItemDescription etiqueta={"Precio:"} valor={`${price} €`} />
        <ItemDescription
          etiqueta={"Riegos por semana:"}
          valor={wateringsPerWeek}
        />
        <ItemDescription
          etiqueta={"Tipo de fertilizante:"}
          valor={fertilizerType}
        />
        <ItemDescription etiqueta={"Altura:"} valor={`${heightInCm} cm`} />
      </div>
    </section>
  );
}

export default Description;
