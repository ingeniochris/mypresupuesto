import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import MessageError from "./messageError";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [errNombre, guardarErrNombre] = useState(false);
  const [errCantidad, guardarErrCantidad] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (valNombre(nombre) || valCantidad(cantidad)) {
      return;
    }

    guardarErrNombre(false);
    guardarErrCantidad(false);
    //contruir gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    //pasar el gasto a el componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);

    //reset form
    guardarNombre("");
    guardarCantidad(0);
  };

  const valNombre = (nombre) => {
    if (nombre.trim() === "") {
      guardarErrNombre(true);
      return true;
    }
  };

  const valCantidad = (cantidad) => {
    if (cantidad < 1 || isNaN(cantidad)) {
      guardarErrCantidad(true);
      return true;
    }
  };

  return (
    <form onSubmit={agregarGasto}>
      <h3 className="text-center pb-3">Agrega tus gastos</h3>
      <div className="form-group">
        <h5>Nombre de gasto</h5>

        <input
          className={errNombre ? "form-control border-danger" : "form-control "}
          type="text"
          value={nombre}
          placeholder="Ej. Transporte"
          onChange={(e) => {
            guardarNombre(e.target.value);
            guardarErrNombre(false);
          }}
        />
        {errNombre ? <MessageError message={"Ingresa un nombre"} /> : null}
      </div>

      <div className="form-group">
        <h5>Cantidad de gasto</h5>
        <input
          className={
            errCantidad ? "form-control border-danger" : "form-control "
          }
          type="number"
          value={cantidad}
          placeholder="Ej. 300"
          onChange={(e) => {
            guardarCantidad(parseInt(e.target.value, 10));
            guardarErrCantidad(false);
          }}
        />
        {errCantidad ? <MessageError message={"Cantidad no valida"} /> : null}
      </div>
      <input
        type="submit"
        className="btn btn-primary btn-lg btn-block"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
