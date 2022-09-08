import "./text.scss";

const Text = () => {
  return (
    <section className="text-content">
      <strong>Como o calcular juros composto?</strong>
      <p>
        O cálculo do juros composto é feito a partir da taxa de juros dividido por 100, onde obteremos o (i), em seguida
        pegamos esse valor de (i) e somamos com 1 e elevamos ao tempo de aplicação (<sup>n</sup>), e por ultimo
        multiplicamos pelo capital investido (C){" "}
      </p>
      <p className="formula">
        Formula:{" "}
        <span>
          M = C . (1 + i)<sup>n</sup>
        </span>
      </p>
    </section>
  );
};

export default Text;
