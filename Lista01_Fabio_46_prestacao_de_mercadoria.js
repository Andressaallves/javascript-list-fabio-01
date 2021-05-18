const prompt = require('prompt-sync')()

// Entrada
console.log('Questão sobre o valor de uma mercadoria mais as suas 3 prestações.')
console.log('Considere a entrada maior ou igual a duas últimas, sendo as mais inteiras possíveis.')

// Cálculo de parcelas
const valor_mercadoria = Number(prompt('Digite aqui o valor: '))

// Cálculo da conversão de parcelas
const preco_inicial = Number(prompt(valor_mercadoria / 3) + (valor_mercadoria % 3))
const parcelas_divisao = Number(prompt(valor_mercadoria - preco_inicial) / 2)

// Fim da questão ou Solução
print('O valor da prestação inicial é: ', preco_inicial)
print('O valor total, somado às 2 últimas prestações é: ', parcelas_divisao)