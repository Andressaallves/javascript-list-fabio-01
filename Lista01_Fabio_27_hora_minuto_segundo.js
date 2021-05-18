const prompt = require('prompt-sync')()

// Entrada
console.log('Um programa que receba segundos e transforme em horas, minutos e segundos:')
const segundo_1 = Number(prompt('Digite aqui o número de segundos: '))

// Meio do problema
const hora = segundo_1 / 3600
const resto = segundo_1 % 3600
const minuto = resto / 60
const segundo_2 = resto % 60

// Final
console.log('Por isso, representa-se por: ', hora, 'horas,', minuto, 'minuto(s) e', segundo_2, 'segundos')
