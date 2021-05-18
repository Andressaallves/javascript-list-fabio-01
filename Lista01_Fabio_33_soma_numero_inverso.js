const prompt = require('prompt-sync')()

// Entrada
console.log('Questão sobre a soma de um número inteiro de 3 dígitos com seu inverso:')
const num_1 = Number(prompt('Digite aqui o número: '))

// Processamento
unidade = Number(prompt(num_1 / 100))
resto_1 = Number(prompt(num_1 % 100))
dezena = Number(prompt(resto_1 / 10))
centena = Number(prompt(resto_1 % 10))
num_2 =  Number(prompt(centena * 100 + dezena * 10 + unidade * 1))

// Calcular o somatório de seu inverso
const sub_total = Number(prompt(num_1 + num_2))

// Saída
console.log('A soma de um número com seu inverso será: ', sub_total)
