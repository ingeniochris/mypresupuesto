import React from "react";
import PropTypes from "prop-types";

const Gasto = ({ gasto }) => {
  return (
    <div>
      <h5 className="card-body">
        {gasto.nombre} : <span className="float-right">$ {gasto.cantidad}</span>
      </h5>
      <hr />
    </div>
  );
};

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
};
export default Gasto;
