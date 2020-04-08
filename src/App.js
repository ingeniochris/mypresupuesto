import React, { Fragment, useState, useEffect } from "react";
import logo from "./logo.svg";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if (crearGasto) {
      guardarGastos([...gastos, gasto]);
    }
    operaciones(restante, gasto);
  }, [gasto]);

  const operaciones = (restante, gasto) => {
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);
    guardarCrearGasto(false);
  };

  return (
    <Fragment>
      <div className="wallpaper">
        <div className="container pt-3">
          <h1>
            <img className="logo" src={logo} alt="react" />
            Presupuesto
          </h1>
          <div className="row">
            <div className="col-md-6 pt-3">
              {mostrarpregunta ? (
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                />
              ) : (
                <div className="row">
                  <div className="col-md-6 pb-3">
                    <Formulario
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card p-1">
                      <Listado gastos={gastos} />
                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
