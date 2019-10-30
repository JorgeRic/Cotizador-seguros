import React, { Component } from 'react';
import '../normalize.css';
import '../skeleton.css'


class Formulario extends Component {
  state = { 
    cantidad: '',
    plazo: ''
   }

   calcularPrestamo = (e) =>{
    e.preventDefault();
    const { cantidad, plazo } = this.state;
    this.props.datosPrestamo(cantidad,plazo)
   }

   actualizarState = (e) =>{
     const { name, value } = e.target;

      this.setState({
        [name]: Number(value)

      })
   }

   habilitarSubmit = () =>{
     const { cantidad, plazo } = this.state;
     const noValido = !cantidad || !plazo;
     
     return noValido;
  

   }

  render(){
   
    return(
      
        <form onSubmit ={this.calcularPrestamo}>
          <div>
            <label>Cantidad del prestamo:</label>
            <input 
              onChange={this.actualizarState}
              type="number" 
              name="cantidad"
              className="u-full-width" 
              placeholder="ejemplo 3000"/>
          </div>
          <div>
            <label>Plazo de pago:</label>
            <select name="plazo" className="u-full-width" onChange={this.actualizarState}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input 
              disabled={this.habilitarSubmit()}
              type="submit" 
              value="calcular" 
              className="u-full-width button-primary"/>
          </div>
        </form>
      
    )
  }
}



export default Formulario;