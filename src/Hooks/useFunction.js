import { useState } from "react";

export const CustomCalculator = () => {
  const [Resultado, setResultado] = useState(0);

  const Click = (e) => {
    if (Resultado === 0) {
      setResultado(e.target.name);
    } else {
      setResultado(Resultado.concat(e.target.name));
    } 
  };

  const Expresion = () => {
    try {
      setResultado(eval(Resultado).toString());
    } catch (err) {
      setResultado("Error");
    }
  };

  const BorrarTodo = () => {
    setResultado(0);
  };

  const Borrar = () => {
    if (Resultado === 0) {
      setResultado(0);
    } else {
      setResultado(Resultado.slice(0, -1));
    }
  };

  return [Resultado, Borrar, BorrarTodo, Expresion, Click];
};
