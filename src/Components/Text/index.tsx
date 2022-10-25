import Image from "next/image";
import styles from "./text.module.scss";

const Text = () => {
  return (
    <section className={styles["text-content"]}>
      <h2>O que são juros compostos?</h2>
      <p>
        Se você está investindo em juros compostos significa que você está investindo em uma condição que você receberá
        no final do investimento o valor aplicado mais juros sobre o valor aplicado, e além disso, mais juros sobre o
        prório juros que você recebeu durante o período negociado, (veja exemplo abaixo), por isso é uma das melhores
        opções para se investir no mercado. Quanto maior o tempo investido ou quanto maior a taxa de juros negociada,
        maior é o retorno do investimento.
      </p>
      <p>
        A diferença do juros compostos para os juros simples é simples: Nos juros simples você ja tem um valor pré
        estabelecido de quanto vai ser o juros no final do período, calculado de acordo com o valor principal do
        investimento. Já nos juros compostos não, o investimento varia de acordo com o valor principal do investimento
        somado ao valor já recebido de juros anteriormente, por isso os juros compostos são popularmente conhecidos como
        juros sobre juros.
      </p>
      <p>Veja abaixo um exemplo de simulações de juros compostos:</p>
      <Image
        className="sem-aporte"
        src="/simulação-juros-compostos.png"
        alt="gráfico de simulação de juros compostos"
        layout="responsive"
        width={833}
        height={447}
      />
      <h2>Juros compostos com aporte</h2>
      <p>
        Os juros compostos com aporte é uma modalidade em que você acrescenta um novo valor a cada período de tempo, ou
        seja, é a combinação perfeita para um bom rendimento de sua aplicação. Essa modalidade é comum para mensalistas
        que montam uma poupança de longo prazo a partir de um determinado valor que sobra de seu salário.
      </p>
      <p>Veja abaixo um exemplo de simulações de juros compostos com aportes por período:</p>
      <Image
        className="com-aporte"
        src="/simulação-juros-compostos-com-aporte.png"
        alt="gráfico de simulação de juros compostos com aporte"
        layout="responsive"
        width={835}
        height={439}
      />
      <h2>Porque conhecer juros é importante?</h2>
      <p>
        Entrar em um investimento bom pode fazer total diferença na sua vida financeira, você pode economizar anos de
        vida e milhares de horas de trabalho. Entrar em investimentos de juros compostos é um ótimo plano investimentos
        desde planejar uma reserva ou investir em algum negócio ao final do prazo.
      </p>
      <p>
        Conhecendo os juros compostos da forma correta pode evitar de que você de entre em um empréstimo em que você se
        arrependa. Além disso, você pode traçar um plano híbrido, em que você economiza uma parte do investimento e
        contrata com seu banco um empréstimo menor com uma taxa de juros menor e mais flexível.
      </p>
      <p>
        Calcule e faça simulações na nossa ferramenta grátis e veja se vale a pena economizar ou fazer o empréstimo.
      </p>
      <h2>Como o calcular juros compostos?</h2>
      <p>
        O cálculo do juros composto é feito a partir da taxa de juros dividido por 100, onde obteremos o (i), em seguida
        pegamos esse valor de (i) e somamos com 1 e elevamos ao tempo de aplicação (<sup>n</sup>), e por ultimo
        multiplicamos pelo capital investido (C){" "}
      </p>
      <p>
        Aqui você consegue visualizar e comparar de forma grátis diversas simulações de investimento, para adicionar uma
        nova simulação ao gráfico basta adicionar um novo valor na calculadora
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
