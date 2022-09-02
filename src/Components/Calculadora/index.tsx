import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../../store/fatores";
import { RootState } from "../../store/configureStore";

const Calculadora = () => {
  //
  const fatores = useSelector((state: RootState) => state.fatores.entrada);

  const [inputs, setInputs] = useState({
    capitalAplicado: { title: "Capital aplicado", valor: fatores.capitalAplicado },
    taxaJuros: { title: "Taxa de juros", valor: fatores.taxaJuros },
    tempo: { title: "Tempo", valor: fatores.tempo },
  });
  const [periodo, setPeriodo] = useState("Mensal");
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriodo(event.target.value);
  };
  //
  return (
    <div className="calculadora">
      {Object.entries(inputs).map((input, index) => {
        return (
          <div className={`input ${input[0]}`} key={input[1].title}>
            <label htmlFor={input[0]}>{input[1].title}</label>
            <input
              id={input[0]}
              value={input[1].valor}
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  [input[0]]: {
                    title: input[1].title,
                    valor: e.target.value.replace(".", ","),
                  },
                })
              }
            />
            {input[1].title === "Taxa de juros" && <>% ao {periodo === "Mensal" ? "mês" : "ano"}</>}
            {input[1].title === "Tempo" && (
              <select name="periodo" id="periodo" value={periodo} onChange={(event) => handleChange(event)}>
                <option value="Mensal">Mensal</option>
                <option value="Anual">Anual</option>
              </select>
            )}
          </div>
        );
      })}
      <button onClick={() => dispatch(changeValue({ ...inputs, periodo: periodo }))}>Calcular</button>
      <div>
        {Object.entries(fatores).map((input) => {
          console.log(input);
          return (
            <div className="input" key={input[0]}>
              {input[1]}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Calculadora;
