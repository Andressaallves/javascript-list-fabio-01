const prompt = require('prompt-sync')()

// Entrada
console.log('Um programa que leia um número inteiro de metros e converta para quilômetro e metro:')
const metro = Number(prompt('Digite aqui o número de metros: '))

// Meio
const km = metro / 1000
const metro_totais = metro % 1000

// Fim
console.log('A quantidade calculada para quilômetro e metro será: ', km, 'quilômetros e', metro_totais, 'metros')
