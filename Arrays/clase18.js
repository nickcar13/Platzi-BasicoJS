var sacha = {
    nombre: 'Sacha',
    apellido: 'lifszync',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura <= 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)//filter recibe una funcion o una condicion y regresa un nuevo array

// var personasAltas = personas.filter(function (persona){ //mismo proceso con funcion anonima
//     return persona.altura > 1.8
// })

console.log(personasAltas)

var personasBajas = personas.filter(esBaja)

console.log(personasBajas)