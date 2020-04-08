import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";
import PropTypes from "prop-types";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-info">
        <h5>
          Presupuesto: <span className="float-right">${presupuesto}</span>
        </h5>
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)}>
        <h5>
          Restante: <span className="float-right">${restante}</span>
        </h5>
      </div>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default ControlPresupuesto;
