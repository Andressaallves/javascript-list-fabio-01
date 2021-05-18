const prompt = require('prompt-sync')()

// Estabelecendo partes
console.log('Leitura de 2 frações e a respectiva soma das frações:')
const numerador_1 = Number(prompt('Digite o numerador de uma fração 1: '))
const denominador_1 = Number(prompt('Digite o denominador de uma fração 1: '))
const numerador_2 = Number(prompt('Digite o numerador da fração 2: '))
const denominador_2 = Number(prompt('Digite o denominador da fração 2: '))

// Calculando as partes das frações
denominador_5 = Number(prompt(denominador_1 * denominador_2))
numerador_3 = Number(prompt((denominador_5 / denominador_1) * numerador_1)
numerador_4 = Number(prompt(denominador_5 / denominador_2) * numerador_2)
numerador_5 = Number(prompt(numerador_3 + numerador_4))

// Saída
console.log('A soma das 2 frações será: ', numerador_4, '/', denominador_5, sep='')