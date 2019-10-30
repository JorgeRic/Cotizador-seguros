import React, { Component } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado'
import Mensaje from './components/Mensaje'
import Spinner from './components/Spinner'
import './normalize.css';
import './skeleton.css'
import { calcularTotal } from './helpers'


class App extends Component {
state = {
  total: '',
  cantidad: '',
  plazo:'',
  cargando: false
}

datosPrestamo = (cantidad, plazo) =>{
 const total = calcularTotal(cantidad, plazo)
 this.setState({
   cargando: true
 }, () =>{
   setTimeout(()=>{
     this.setState({
       total,
       cantidad,
       plazo,
       cargando: false
     })
    }, 3000)
   })
  }
  render(){

    const { total, cantidad, plazo, cargando } = this.state;
    let componente;
    if(total===''  && !cargando){
      componente = <Mensaje />
    }
    else if(cargando){
      componente = <Spinner/>
    }

    else{
      componente = 
      <Resultado
        total={total}
        cantidad={cantidad}
        plazo={plazo}
      />
    }
    return(
      <>
        <h1>Cotizador de prestamos</h1>
        <div className="container">
          <Formulario 
          datosPrestamo={this.datosPrestamo}
          />
          <div className="mensajes">
            
            {componente}
          </div>
        </div>
      </>
    )
  }
}

export default App;
