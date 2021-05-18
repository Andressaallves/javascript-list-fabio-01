const prompt = require('prompt-sync')()

// Entrada
console.log('Um programa que receba minutos e transforme em dias, horas e minutos:')
const minutos = Number(prompt('Digite aqui o número de minutos: '))

// Processamento
const min_dias = minutos / 1440
const resto = minutos % 1440
const min_horas = resto / 60
const min_totais = resto % 60

// Fim
console.log('A conversão de minutos em dias, horas e minutos será: ', min_dias, 'dias,', min_horas, 'horas e', min_totais, 'minutos')