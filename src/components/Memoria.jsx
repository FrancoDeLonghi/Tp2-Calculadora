import "../styles/bs.css";

function Memoria({ memoria, setValorDisplay }) {
  const usarMemoria = () => {
    setValorDisplay(memoria);
  };

  return (
    <div className="memory-container">
      <button onClick={usarMemoria} className="boton-memory">Memoria</button>
    </div>
  );
}

export default Memoria;
