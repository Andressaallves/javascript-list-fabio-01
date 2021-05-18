const prompt = require('prompt-sync')()

// Introdução
console.log('Um programa que receba um número de horas e transforme em semanas, dia e horas:')
const hora_1 = Number(prompt('Digite aqui o número de horas: '))

// Calcule as transformações
const semana = hora_1 / 168
const resto = hora_1 % 168
const dia = resto / 24
const hora_2 = resto % 24

// Saída
console.log('A conversão de horas em semanas, dias e horas é: ', semana, 'semanas', dia, 'dia(s) e', hora_2, 'horas')