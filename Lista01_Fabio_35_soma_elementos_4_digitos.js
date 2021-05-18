// Começo da questão
console.log('Um programa que leia a soma de um número com 4 dígitos:')
const num = Number(prompt('Digite aqui o número: '))

// Meio da análise
const milhar = Number(prompt(num / 1000))
const resto_1 = Number(prompt(num % 1000))
const centena = Number(prompt(resto_1 / 100))
const resto_2 = Number(prompt(resto_1 % 100))
const dezena = Number(prompt(resto_2 / 10))
const unidade = Number(prompt(resto_2 % 10))

// Calcular a soma entre eles
const soma = Number(prompt(milhar + centena + dezena + unidade))

// Impressão
console.log('O somatório dos 4 dígitos é: ', soma)