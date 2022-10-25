import React from "react";

import styles from "./footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      Contato: aldoraduenzjunior@gmail.com <br />© {new Date().getFullYear()} Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
