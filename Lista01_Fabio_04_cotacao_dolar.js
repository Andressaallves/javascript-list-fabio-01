const prompt = require('prompt-sync')()

// Entrada na questão
const cotacao_dolar = Number(prompt('Digite aqui quanto vale o dólar: '))
const quant_dolar = Number(prompt('Diga aqui a quantidade de dólares convertidos: '))

// Permissão da conversão de moedas
const valor_real = cotacao_dolar * quant_dolar

// Valor final
console.log('A moeda valerá: R$', valor_real, 'reais')