const prompt = require('prompt-sync')()

// Entrada
console.log('Escreva um programa que transforma dias em semanas e dias:')
const dia = Number(prompt('Digite aqui o número de dias: '))

// Conversão
const semana = dia / 7
const dias_total = dia % 7

// Final
console.log('A conversão de dia em semanas e dias será: ', semana, 'semanas e', dias_total, 'dias')