const prompt = require('prompt-sync')()

// Começo
console.log('Receber notas de 3 matérias, seus pesos e calcular a média ponderada das mesmas:')
const nota_1 = Number(prompt('Digite a primerira nota: '))
const peso_1 = Number(prompt('Digite o peso dela: '))
const nota_2 = Number(prompt('Digite a segunda nota: '))
const peso_2 = Number(prompt('Digite o peso dela: '))
const nota_3 = Number(prompt('Digite a terceira nota: '))
const peso_3 = Number(prompt('Digite o peso dela: '))

// Processo
const notas = (nota_1 * peso_1) + (nota_2 * peso_2) + (nota_3 * peso_3)
const pesos = peso_1 + peso_2 + peso_3
const media_final = notas / pesos

// Fim da questão
console.log('Sua média ponderada é: ', media_final)