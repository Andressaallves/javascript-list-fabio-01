const prompt = require('prompt-sync')()

// Importando a função Matemática
from math import sqrt

// Inserindo dados num plano
const x1 = Number(prompt('Digite aqui a abscissa do ponto A: '))
const x2 = Number(prompt('Digite aqui a abscisa do Ponto B: '))
const y1 = Number(prompt('Digite aqui ordenada do ponto A: '))
const y2 = Number(prompt('Digite aqui a ordenada do ponto B: '))

// Meio da questão com 2 entradas
console.log('A distância de dois pontos quaisquer em um plano é:')
const pontos_medida = Number(prompt((x2 - x1) ** 2) + ((y2 - y1) ** 2))


// Impressão
console.log('A menor distância de dois pontos em um plano é: ', pontos_medida)

