const prompt = require('prompt-sync')()

// Entrada
console.log('Leia um programa que calcule o IMC de uma pessoa.')
const peso = Number(prompt('Digite aqui o número referente ao seu peso em kg: '))
const altura = Number(prompt('Digite aqui o número referente a sua altura em metros: '))

// Cálculo do Índice de Massa Corporal
const imc = (peso / (altura ** 2))

// Valor Final
console.log('O IMC de determinada pessoa valerá: ', imc)