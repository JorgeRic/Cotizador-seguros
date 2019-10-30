export function calcularTotal(cantidad, plazo){

  let totalCantidad;
  
  if(cantidad <= 1000){
    totalCantidad = cantidad*0.25
  }
  else if(cantidad > 1000 && cantidad<= 5000){
    totalCantidad = cantidad*0.20
  }
  else if(cantidad > 5000 && cantidad<= 10000){
    totalCantidad = cantidad*0.15
  }else{
    totalCantidad = cantidad*0.10
  }
 
  let totalPlazo;

  if(plazo === 3){
    totalPlazo = cantidad * 0.05;
  }
  else if(plazo === 6){
    totalPlazo = cantidad * .1;
  }
  else if(plazo === 12){
    totalPlazo = cantidad * 0.15;
  }
  else{
    totalPlazo = cantidad * 0.2;
  }

  return cantidad + totalCantidad + totalPlazo;
}