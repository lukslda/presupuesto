import React, { Fragment, useState } from 'react';
import Error from './Error';


const Pregunta = () => {

  // definir el state.
  const [ cantidad, guardarCantidad] = useState(0);

  //segundo state 
  const [error, guardarError] = useState(false);

  // leer presupuesto
  const definirPresupuesto = e => {
    guardarCantidad( parseInt(e.target.value, 10) )
  }


  // submit definir presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad) ){
      console.log("cantidad es :");
      console.log(cantidad);
      guardarError(true);
      return;
    } 

    // si pasa la validacion
    guardarError(false);

  }

  return (
    <Fragment>
      <h2> Ingrese su presupuesto </h2>

      { error ? <Error mensaje="El presuesto es Incorrecto" /> : null }

      <form
        onSubmit = { agregarPresupuesto }
      >
          <input
              type="number"
              className = "u-full-width"
              placeholder="Ingrese su presupuesto"
              onChange = {definirPresupuesto}
          />

          <input
              type="submit"
              className="button-primary u-full-width"
              value="Definir Presupuesto"
          />
      </form>

    </Fragment>
  );
}

export default Pregunta;