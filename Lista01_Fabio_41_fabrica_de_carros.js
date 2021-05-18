const prompt = require('prompt-sync')()

// Entrada
console.log('Leia uma questão que analisa o custo para se adquirir um carro novo:')
console.log('O preço do carro é em cima dos impostos.')
const custo_fabrica = Number(prompt('Digite aqui o valor de custo inicial para o comprador: '))

// Processamento de dados
const preco_inicial = Number(prompt(custo_fabrica * 0.28) - custo_fabrica)
const preco_consumidor_final = Number(prompt(preco_inicial * 0.45) - preco_inicial)

// mpressão
console.log('O valor final do carro novo será: R$', preco_consumidor_final)
