import { useState } from "react";

const CustomCalculator = () => {
  const [Resultado, setResultado] = useState("");

  const Click = (e) => {
    setResultado(Resultado.concat(e.target.name));
  };

  const Expresion = () => {
    try {
      setResultado(eval(Resultado).toString());
    } catch (err) {
      setResultado("Error");
    }
  };

  const BorrarTodo = () => {
    setResultado("");
  };

  const Borrar = () => {
    setResultado(Resultado.slice(0, -1));
  };

  return [Resultado, Borrar, BorrarTodo, Expresion, Click];
};

export default CustomCalculator;
