const prompt = require('prompt-sync')()

// Introdução
console.log('Leia um número de 3 dígitos e calcule a diferença o número e seu inverso:')
const num_1 = Number(prompt('Digite aqui o número: '))

// Meio do problema
const unidade = Number(prompt(num_1 / 100))
const resto_1 = Number(prompt(num_1 % 100))
const dezena = Number(prompt(resto_1 / 10))
const centena = Number(prompt(resto_1 % 10))
const num_2 = Number(prompt(centena * 100 + dezena * 10 + unidade * 1))

// Calcular a diferença e/ou o Sub-Total
const sub_total = Number(prompt(num_1 - num_2))

// Impressão
console.log('A diferença entre o número, dado o seu inverso é: ', sub_total)