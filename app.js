//importar las funciones de la app calculadora
// crear una funcion llamada calcular(), esta funcion debera recibir tres parametros, el nombre del calculo a realizar, dos valores mas para realizar el calculo.
// mostrar por consola el resultado de la operacion
import { suma, resta, multiplicacion, division, info } from "./calculadora.js";
function calcular(Calculo, n1, n2) {
  if (Calculo === suma) {
    return suma(n1, n2)
  }
  if (Calculo === resta) {
    return resta(n1,n2)
  }
  if (Calculo === multiplicacion) {
    return multiplicacion(n1,n2)
  }
  if (Calculo === division) {
    return division(n1,n2)
  } else {
    console.log("No se encontro la operación solicitada")
    return null
  }
}

info()
console.log(calcular(suma, 5, 4))
console.log(calcular(resta, 5, 4))
console.log(calcular(multiplicacion, 5, 4))
console.log(calcular(division, 5, 4))
console.log(calcular(division,"unTexto", "otroTexto"))