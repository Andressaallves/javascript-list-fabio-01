const prompt = require('prompt-sync')()

// Dados de entrada
console.log('Calcular a quantidade de dinheiro gasta por um fumante:')
console.log('Considere uma carteira já com 20 cigarros:')
const anos = Number(prompt('Anos gastos fumando: '))
const dia_cigarros = Number(prompt('O número de cigarros fumados por dia: '))
const preco_carteira = Number(prompt('O preço de uma carteira de cigarros é: R$'))

// Dados do processamento
const anos_de_fumo = Number(prompt(anos * 365)
const dinheiro_gasto = Number(prompt((anos_de_fumo * dia_cigarros / 20) * preco_carteira)

// Dados finais
console.log('O dinheiro gasto total por um fumante será: R$', dinheiro_gasto, 'reais')
console.log('Atenção: fumar causa câncer de pulmão.')