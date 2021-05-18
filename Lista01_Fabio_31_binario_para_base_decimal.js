const prompt = require('prompt-sync')()

// Intro
console.log('A conversão de um nibble(4 dígitos binários) em base decimal:')
const num_binario = Number(prompt('Escreva o número em base binária: '))

// Meio da questão
const milhar = Number(prompt(num_binario / 1000))
const resto_1 = Number(prompt(num_binario % 1000))
const centena = Number(prompt(resto_1 / 100))
const resto_2 = Number(prompt(resto_1 % 100))
const dezena = Number(prompt(resto_2 / 10))
const unidade = Number(prompt(resto_2 % 10))

// Cálculo do número binário nas suas bases
const digito_1 = Number(prompt(2 ** 0) * unidade)
const digito_2 = Number(prompt(2 ** 1) * dezena)
const digito_3 = Number(prompt(2 ** 2) * centena)
const digito_4 = Number(prompt(2 ** 3) * milhar)
const digitos_totais = Number(prompt(digito_1 + digito_2 + digito_3 + digito_4))

// Valor de saída
console.log('A transformação de número binário para decimal é: ', digitos_totais, 'em decimal(is)')
