import React from "react";
import "./loading.scss";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="loading">
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
