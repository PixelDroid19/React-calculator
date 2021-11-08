import { CustomCalculator } from "../Hooks/useFunction";

//Estilos personalizados con styled-components
import {
  CustomBox,
  CustomInput,
  CustomButton,
  ButtonInput,
  CustomBoxButton,
  CustomBoxButton2,
  BoxButtonMain,
} from "../Styles/Calc-style";

import "bulma/css/bulma.min.css";

const Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export const CalculatorUi = () => {
  const [Resultado, Borrar, BorrarTodo, Expresion, Click] = CustomCalculator();

  return (
    <CustomBox>
      <CustomInput
        className="input is-primary"
        type="text"
        value={Resultado}
        placeholder="0"
        readOnly
      />

      <BoxButtonMain>
        <CustomBoxButton>
          {Numeros.map((e) => (
            <CustomButton
              className="button is-dark"
              key={e}
              name={e}
              onClick={Click}
            >
              {e}
            </CustomButton>
          ))}

          <ButtonInput
            type="button"
            className="button is-warning"
            value="C"
            onClick={Borrar}
            readOnly
          />
          <ButtonInput
            type="button"
            className="button is-danger"
            value="AC"
            onClick={BorrarTodo}
            readOnly
          />
        </CustomBoxButton>

        <CustomBoxButton2>
          <ButtonInput
            type="button"
            className="button is-primary"
            name="*"
            value="*"
            onClick={Click}
            readOnly
          />
          <ButtonInput
            type="button"
            className="button is-primary"
            name="/"
            value="/"
            onClick={Click}
            readOnly
          />
          <ButtonInput
            type="button"
            className="button is-primary"
            name="-"
            value="-"
            onClick={Click}
            readOnly
          />
          <ButtonInput
            type="button"
            className="button is-primary"
            name="+"
            value="+"
            onClick={Click}
            readOnly
          />
          <ButtonInput
            type="button"
            className="button is-success"
            value="="
            onClick={Expresion}
            readOnly
          />
        </CustomBoxButton2>
      </BoxButtonMain>
    </CustomBox>
  );
};
