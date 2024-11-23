const {registrarCita, leerCitas} = require("./operaciones")

let operacion = process.argv[2];
let nombre = process.argv[3];
let edad = process.argv[4]
let animal = process.argv[5];
let color = process.argv[6];
let enfermedad = process.argv[7];

if(operacion == 'registrar'){
    registrarCita(nombre, edad, animal, color, enfermedad)
};

if(operacion == 'leer'){
    leerCitas()
};