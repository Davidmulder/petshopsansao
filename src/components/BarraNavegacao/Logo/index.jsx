import React from "react";
import logopet from "/assets/images/logo-nome.png";

const Logo = () => {
  return (
    <a className="navbar-brand" href="#">      
      <h1 className="m-0">       
        <img className="d-block" src={logopet} alt="Logo da sansão pet" width="133px" />
      </h1>
    </a>
  );
};

export default Logo;
