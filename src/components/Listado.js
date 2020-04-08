import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => {
  return (
    <div>
      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} />
      ))}
    </div>
  );
};

Listado.protoTypes = {
  gastos: PropTypes.array.isRequired
}

export default Listado;
