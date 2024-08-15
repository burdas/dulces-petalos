function Description({etiqueta, valor}) {
    return (
      <div className="text-black bg-neutral-300 p-4 rounded-lg flex flex-col justify-items-center items-center">
        <p className="text-xl font-bold">{etiqueta}</p>
        <p className="text-lg text-center font-semibold">{valor}</p>
      </div>
    );
  }
  
  export default Description;
  