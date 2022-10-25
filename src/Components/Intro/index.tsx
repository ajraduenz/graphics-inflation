import React from "react";
import Loading from "../Loading";
import styles from "./intro.module.scss";

type Props = {
  selicHoje: {
    data: string | null;
    valor: string | null;
  } | null;
};
const Intro = ({ selicHoje }: Props) => {
  return (
    <div className={styles.intro}>
      <h1>Calculadora de juros compostos com gráfico</h1>
      <p>
        Os juros compostos são também chamados de juros sobre juros, um bom investimento precisa ser igual ou maior a
        taxa Selic ao ano de hoje. Digite os valores e compare no gráfico os seus investimentos. Lembrando que a{" "}
        <a className="link" target="_blank" rel="noreferrer nofollow" href="https://www.bcb.gov.br/controleinflacao/taxaselic">
          taxa Selic
        </a>{" "}
        é volátil e varia de acordo com as decisões do Banco Central.
      </p>
      <div className={styles["selic-hoje"]}>
        <strong>Selic hoje: {selicHoje ? selicHoje?.valor?.replace(".", ",")+"%" : <Loading/>}</strong>
        <div>{selicHoje?.data || <Loading/>}</div>
      </div>
    </div>
  );
};

export default Intro;
