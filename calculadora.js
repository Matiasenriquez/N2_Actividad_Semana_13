//crear 4 funciones, para suma,resta,multiplicacion y division
//las funciones deben verificar que los parametros ingresados sean numeros y no texto
//añadir manejo de errores, en caso de que no sean numeros, devolver un error
//crear una 5ta funcion llamada info() debera mostrar un mensaje que haga mencion sobre las funcionalidades de ese archivo (por ejemplo: “Con el presente modulo usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir”,

export function suma(n1, n2) {
  try {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error("Los datos ingresados deben ser numeros");
    }
    return n1 + n2
  } catch (error) {
    console.log("Aviso", error);
    return null;
  }
}
export function resta(n1, n2) {
  try {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error("Los datos ingresados deben ser numeros");
    }
    return n1 - n2
  } catch (error) {
    console.log("Aviso", error);
    return null;
  }
}
export function multiplicacion(n1, n2) {
  try {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error("Los datos ingresados deben ser numeros");
    }
    return n1 * n2
  } catch (error) {
    console.log("Aviso", error);
    return null;
  }
}
export function division(n1, n2) {
  try {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
      throw new Error("Los datos ingresados deben ser numeros");
    }
    if (n2 === 0) {
      throw new Error("No se puede dividir por 0")
    }
    return n1 / n2
  } catch (error) {
    console.log("Aviso", error);
    return null;
  }
}

export function info() {
  console.log("Con la siguiente APP usted podrá realizar las operaciones básicas de matemática como sumar, restar, multiplicar y dividir, para ejecutarlas escriba el nombre de la operacion seguido de los dos numeros que desea calcular.")
}