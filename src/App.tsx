import { useEffect, useState } from "react";
import Calculadora from "./Components/Calculadora";
import "./_global.scss";

function App() {
  const [fatores, setFatores] = useState({
    montante: 0,
    capitalAplicado: 0,
    taxaJuros: 0,
    tempo: 0,
  });

  const url = "https://brasilapi.com.br/api/fipe/preco/v1/088001-9";
  const url2 = "https://brasilapi.com.br/api/taxas/v1";
  const url3 = "https://brasilapi.com.br/api/feriados/v1/2020";
  const url4 =
    "http://api.bcb.gov.br/dados/serie/bcdata.sgs.10613/dados?formato=json&dataInicial=01/01/2010&dataFinal=31/12/2016";
  const url5 =
    "http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y";

  // useEffect(() => {
  //   fetch(url5)
  //     .then((r) => r.json())
  //     .then((r) => console.log(r));
  // }, []);

  // function calculoMontante = () =>{
  //   return
  // }

  return (
    <div className="App">
      <h1>Calculadora de juros compostos com gráfico</h1>
      <p>
        Formula M = C . (1 + i)<sup>n</sup>
      </p>
      <Calculadora />
    </div>
  );
}

export default App;
