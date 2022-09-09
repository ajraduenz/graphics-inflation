import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeValue, clearValues } from "../../store/fatores";
import { RootState } from "../../store/configureStore";
import "./calculadora.scss";

const Calculadora = () => {
  //
  const fatores = useSelector((state: RootState) => state.fatores.entrada);
  //

  const [inputs, setInputs] = useState({
    capitalAplicado: { title: "Capital aplicado (C)", valor: fatores.capitalAplicado },
    taxaJuros: { title: "Taxa de juros", valor: fatores.taxaJuros },
    tempo: { title: "Tempo", valor: fatores.tempo },
  });
  const [error, setError] = React.useState(false);
  const [periodo, setPeriodo] = useState("Mensal");
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriodo(event.target.value);
    fatores.montante !== 0 && dispatch(clearValues())
    
  };
  //
 
  return (
    <section className="calculadora">
      {Object.entries(inputs).map((input, index) => {
        return (
          <div className={`input ${input[0]}`} key={input[1].title}>
            <label htmlFor={input[0]}>{input[1].title}:</label>
            <input
              id={input[0]}
              value={input[1].valor || ""}
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
      <button
        onClick={() => {
          ![
            ...Object.values(inputs).map((input) => {
              return input.valor === 0;
            }),
          ].every((entry) => entry === false)
            ? setError(true)
            : (setError(false), dispatch(changeValue({ ...inputs, periodo: periodo })));
        }}
      >
        Calcular
      </button>
      {error && <p className="error">* Contém erro, por favor verifique seus dados</p>}
      <button onClick={() => dispatch(clearValues())}>Limpar</button>
      <strong className="result">
        <div>Resultado:</div>
        <div>Juros R$ {Number(fatores.montante).toFixed(2).replace(".", ",")}</div>
        <div>Total R$ {(Number(fatores.montante) + Number(fatores.capitalAplicado)).toFixed(2).replace(".", ",")}</div>
      </strong>
    </section>
  );
};

export default Calculadora;
