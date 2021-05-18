const prompt = require('prompt-sync')()

// Introdução
const dia = Number(prompt('Digite a idade de uma pessoa em dias: '))

// Processamento
dias_ano = dia / 365
resto_1 = dia % 365
dias_meses = resto_1 / 12
dias_2 = resto_1 % 12

// O somatório total
const sub_total = Number(prompt(dias_ano + dias_meses + dias_2))
connsole.log(sub_total)

// Saída
console.log('A solução de dias para anos, meses e dias é: ', dias_ano, 'anos,', dias_meses, 'meses e', dias_2, 'dias')
