import React from 'react';

const Resultado = (props) => {
  return(
    <div className="u-full-width resultado">
      <h2>Resultado</h2>
      <p>La cantidad solicitada fue: {props.cantidad} $</p>
      <p>Plazo de pago: {props.plazo} meses</p>
      
      <p>Total a pagar: {props.total} $</p>
      <p>Su pago mensual sería de: {(props.total / props.plazo).toFixed(2)} $</p>
    </div>
  )
}

export default Resultado;