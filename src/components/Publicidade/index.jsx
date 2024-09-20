import React from "react";
import styler from "./Publicidade.module.css"; // Arquivo CSS para estilização
import foto01 from '/assets/images/banner_menor_1.webp'
import foto02 from '/assets/images/banner_menor_2.webp'

const Publicidade = () => {
  return (
    <div className={styler["publicidade-container"]}>
      <div className={styler.banner}>
        <img src={foto01} alt="Banner 1" />
      </div>
      <div className={styler.banner}>
        <img src={foto02} alt="Banner 2" />
      </div>
    </div>
  );
};

export default Publicidade;
