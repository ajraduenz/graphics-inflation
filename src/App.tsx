import { useEffect, useState } from "react";
import Calculadora from "./Components/Calculadora";
import ChartTax from "./Components/ChartTax";
import Intro from "./Components/Intro";
import Text from "./Components/Text";
import "./_global.scss";

function App() {
  const [fatores, setFatores] = useState({
    montante: 0,
    capitalAplicado: 0,
    taxaJuros: 0,
    tempo: 0,
  });
  const [selicHoje, setSelicHoje] = useState(null);

  // const url = "https://brasilapi.com.br/api/fipe/preco/v1/088001-9";
  // const url2 = "https://brasilapi.com.br/api/taxas/v1";
  // const url3 = "https://brasilapi.com.br/api/feriados/v1/2020";
  // const url4 =
  //   "http://api.bcb.gov.br/dados/serie/bcdata.sgs.10613/dados?formato=json&dataInicial=01/01/2010&dataFinal=31/12/2016";
  // const url5 = "http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y";
  //  const url = 'http://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json'
  // https://www3.bcb.gov.br/sgspub/localizarseries/localizarSeries.do?method=prepararTelaLocalizarSeries
  useEffect(() => {
    function dataAtualFormatada() {
      var data = new Date(),
        dia = data.getDate().toString(),
        diaF = dia.length == 1 ? "0" + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = mes.length == 1 ? "0" + mes : mes,
        anoF = data.getFullYear();
      return diaF + "/" + mesF + "/" + anoF;
    }
    const url = `https://api.bcb.gov.br/dados/serie/bcdata.sgs.432/dados?formato=json&dataInicial=${dataAtualFormatada()}&dataFinal=${dataAtualFormatada()}`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setSelicHoje(r[0]));
  }, []);

  // function calculoMontante = () =>{
  //   return
  // }

  return (
    <div className="App">
      <Intro selicHoje={selicHoje} />
      <div className="chart-container">
        <Calculadora />
        <ChartTax />
      </div>
      <Text />
    </div>
  );
}

export default App;
