import React from "react";
import styles from "./loading.module.scss";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styles.loading}>
      {/* <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      Carregando...
    </div>
  );
};

export default Loading;
