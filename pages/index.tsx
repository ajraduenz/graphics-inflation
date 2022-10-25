import type { NextPage } from "next";
import Image from "next/image";

import { useEffect, useState } from "react";
import Intro from "../src/components/Intro";
import Calculadora from "../src/components/Calculadora";
import ChartTax from "../src/components/ChartTax";
import Footer from "../src/components/Footer";
import Text from "../src/components/Text";
import { Provider } from "react-redux";
import store from "../src/store/juros-compostos/configureStore";

const Home: NextPage = () => {
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
    try {
      fetch(url)
        .then((r) => r.json())
        .then((r) => setSelicHoje(r[0]));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="App">
      <Intro selicHoje={selicHoje} />
      <div className="chart-container">
        <Provider store={store}>
          <Calculadora />
          <ChartTax />
        </Provider>
      </div>
      <Text />
      <Footer />
    </div>
  );
};

export default Home;
