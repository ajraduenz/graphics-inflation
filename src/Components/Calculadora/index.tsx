import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, reduzir } from "../../store/contador";
import { close, open } from "../../store/alertMessage";
import { changeValue } from "../../store/fatores";

const Calculadora = () => {
  //
  const fatores = useSelector((state: any) => state.fatores);
  const alertMessage = useSelector((state: any) => state.alertMessage);
  const [inputs, setInputs] = useState(fatores);
  const dispatch = useDispatch();
  //
  return (
    <div className="calculadora">
      {Object.entries(inputs).map((input, index) => {
        return (
          <div className="input" key={input[0]}>
            <label htmlFor={input[0]}>{input[0]}</label>
            <input
              id={input[0]}
              value={input[1] as number}
              onChange={(e) =>
                setInputs({ ...inputs, [input[0]]: e.target.value })
              }
            />
          </div>
        );
      })}
      <button onClick={() => dispatch(changeValue(inputs))}>Calcular</button>
      {/*  */}
      <div>
        <button onClick={() => dispatch(incrementar())}>Somar</button>
        <button onClick={() => dispatch(reduzir())}>Diminuir</button>
      </div>
      <div>
        <button onClick={() => dispatch(open())}>open alert</button>
        <button onClick={() => dispatch(close())}>close alert</button>
      </div>
      {alertMessage && <p>Alert message</p>}
    </div>
  );
};

export default Calculadora;
