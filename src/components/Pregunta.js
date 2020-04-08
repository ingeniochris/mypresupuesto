import React, { Fragment, useState } from "react";
import MessageError from "./messageError";
import PropTypes from "prop-types";

const Pregunta = ({
  guardarRestante,
  guardarPresupuesto,
  actualizarPregunta,
}) => {
  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const definirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <form onSubmit={agregarPresupuesto}>
        <div className="form-group ">
          <h5>Coloca tu presupuesto mensual</h5>
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className={
                  error
                    ? "input-group-text bg-danger text-white"
                    : "input-group-text "
                }
              >
                $
              </span>
            </div>
            <input
              type="number"
              name=""
              className={error ? "form-control border-danger" : "form-control "}
              onChange={definirPresupuesto}
            />
          </div>
          {error ? (
            <MessageError message={"El presupuesto incorrecto !!"} />
          ) : null}
        </div>
        <button className="btn btn-primary btn-lg btn-block">Agregar</button>
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  guardarRestante: PropTypes.func.isRequired,
  guardarPresupuesto: PropTypes.func.isRequired,
  actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
