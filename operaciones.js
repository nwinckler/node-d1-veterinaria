const fs = require('fs');

const registrarCita = (nombre, edad, animal, color, enfermedad) =>{
    const lista = fs.readFileSync("citas.json", "utf-8");
    let listaParse = JSON.parse(lista);
    listaParse.push({nombre, edad, animal, color, enfermedad})

    fs.writeFileSync('citas.json', JSON.stringify(listaParse));
}

const leerCitas = () =>{
    const citas = fs.readFileSync('citas.json', 'utf-8')
    let citasParse = JSON.parse(citas);
    citasParse.forEach(item=>{console.log(item)})
}

module.exports = {registrarCita, leerCitas}