import React from "react";
import "./footer.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      Contato: aldoraduenzjunior@gmail.com <br />© {new Date().getFullYear()} Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
