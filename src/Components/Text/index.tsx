import "./text.scss";

const Text = () => {
  return (
    <section className="text-content">
      <h2>Como o calcular juros compostos?</h2>
      <p>
        O cálculo do juros composto é feito a partir da taxa de juros dividido por 100, onde obteremos o (i), em seguida
        pegamos esse valor de (i) e somamos com 1 e elevamos ao tempo de aplicação (<sup>n</sup>), e por ultimo
        multiplicamos pelo capital investido (C){" "}
      </p>
      <p>
        Aqui você consegue visualizar e comparar de forma grátis diversas simulações de investimento no gráfico, para
        adicionar uma nova simulação ao gráfico basta adicionar um novo valor na calculadora
      </p>
      <p className="formula">
        Formula:{" "}
        <span>
          M = C . (1 + i)<sup>n</sup>
        </span>
      </p>
      <ul>
        <li>M = Montante, o valor que teremos após o período;</li>
        <li>C = Capital inicial, o valor investido;</li>
        <li>i = Taxa de juros em porcentagem dividido por 100;</li>
        <li>
          <sup>n</sup> = Período da apolicação;
        </li>
      </ul>
      <h2>Exemplo:</h2>
      <p>Vamos supor que você fez um investimento de R$ 1.000,00 por 2 anos com uma taxa de 10% ao ano;</p>
      <p>Logo:</p>
      <ul className="example">
        <li>
          M = 1000x(1+(10/100))<sup>2</sup>{" "}
        </li>
        <li>
          M = 1000x(1+0,1)<sup>2</sup>
        </li>
        <li>
          M = 1000x(1,1)<sup>2</sup>
        </li>
        <li>M = 1000x1,21</li>
        <strong>M = 1.210 reais</strong>
        <li>
          <span>*Obs.: 10% = 10/100</span>
        </li>
      </ul>
    </section>
  );
};

export default Text;
