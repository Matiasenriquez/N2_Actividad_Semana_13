//1. importar la configuraciín con su origen correspondiente
import pool from './conexion.js';

// getTelefonos(): esta función deberá listar los nombres y apellidos de todos los pacientes junto a su respectivo numero de teléfono.
async function getTelefonos() {
  try {
    const [rows] = await pool.query('SELECT nombre, apellido, telefono from paciente');
    return rows
  } catch (error) {
    console.log('Error al obtener usuarios: ', error);
    throw error;
  }
}

// Prueba de query
getTelefonos()
  .then(pacientes => {
  console.log('Pacientes:', pacientes);
  })
  .catch(error => {
  console.error('Error al ejecutar la función:', error);
});

// Query con parametros. getTelefonoPaciente(numero_historial): esta función recibirá por parámetro un numero de historial clínico y deberá devolver el numero de teléfono del paciente al que corresponda.

async function getTelefonoPaciente(numero_historial) {
  try {
    const [rows] = await pool.query('SELECT telefono FROM paciente WHERE nro_historial_paciente = ?',[numero_historial]);
    return rows;
  } catch (error) {
    console.error('Error al obtener el número de teléfono del paciente:', error);
    throw error;
  }
}

//Prueba de query con parametros
getTelefonoPaciente(4112)
  .then(rows => {
    if (rows.length > 0) {
      console.log(`El teléfono del paciente es: ${rows[0].telefono}`);
    } else {
      console.log('Paciente no encontrado');
    }
  })
  .catch(error => {
    console.error('Error al ejecutar la consulta:', error);
  });

  //getMedicosPaciente(numero_historial): aquí deberemos enviar por parámetro nuevamente el número de historial clínico de un paciente y la función debe devolvernos el listado de los médicos que alguna vez atendieron dicho paciente, por lo que requerirá un inner join entre las tres tablas dado que solo podrán saber esos datos a partir de la matricula de los médicos que han atendido a ese paciente en los distintos ingresos de la clínica.
async function getMedicosPaciente(numero_historial) {
  try {
    const [rows] = await pool.query('SELECT medico.matricula, medico.nombre, medico.apellido FROM ingreso INNER JOIN medico ON ingreso.matricula_medico = medico.matricula WHERE nro_historial_paciente = ?', [numero_historial]);
    return rows;
  } catch (error) {
    console.error('Error al obtener los datos del medico del paciente', error)
    throw error;
  }
}
//prueba de query con parametros 2
getMedicosPaciente(4112)
  .then(medicos => {
    if (medicos.length > 0) {
      console.log('Médicos que atendieron al paciente: ');
      medicos.forEach(medico => {
        console.log(`Dr. ${medico.nombre} ${medico.apellido} (Matrícula: ${medico.matricula})`);
      });
    } else {
      console.log('Este paciente no fue atendido por ningún médico de aca.');
    }
  })
  .catch(error => {
    console.error('Error al ejecutar la función:', error);
});
