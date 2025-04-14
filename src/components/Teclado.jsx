import Boton from "./boton";

function Teclado({ valorDisplay, setValorDisplay, setMemoria }) {
  const manejarClick = (e) => {
    const textoBoton = e.target.textContent;
    setValorDisplay(valorDisplay + textoBoton);
  };

  const calcular = () => {
    try {
      const result = eval(valorDisplay).toString();
      setValorDisplay(result);
      setMemoria(result);
    } catch (error) {
      setValorDisplay("Error");
    }
  };

  const clear = () => {
    setValorDisplay("");
  };

  return (
    <>
      <Boton texto="1" operacion={manejarClick} tipo="normal" />
      <Boton texto="2" operacion={manejarClick} tipo="normal" />
      <Boton texto="3" operacion={manejarClick} tipo="normal" />
      <Boton texto="+" operacion={manejarClick} tipo="operacion" />

      <Boton texto="4" operacion={manejarClick} tipo="normal" />
      <Boton texto="5" operacion={manejarClick} tipo="normal" />
      <Boton texto="6" operacion={manejarClick} tipo="normal" />
      <Boton texto="-" operacion={manejarClick} tipo="operacion" />

      <Boton texto="7" operacion={manejarClick} tipo="normal" />
      <Boton texto="8" operacion={manejarClick} tipo="normal" />
      <Boton texto="9" operacion={manejarClick} tipo="normal" />
      <Boton texto="*" operacion={manejarClick} tipo="operacion" />

      <Boton texto="=" operacion={calcular} tipo="normal" />
      <Boton texto="0" operacion={manejarClick} tipo="normal" />
      <Boton texto="." operacion={manejarClick} tipo="normal" />
      <Boton texto="/" operacion={manejarClick} tipo="operacion" />

      <Boton texto="Clear" operacion={clear} tipo="clear" />
    </>
  );
}

export default Teclado;
