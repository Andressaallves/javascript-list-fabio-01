const prompt = require('prompt-sync')()

// Entrada
console.log('Transforme a idade de uma pessoa de anos, meses e dias em apenas dias:')
const anos = Number(prompt('Escreva o número de anos: '))
const meses = Number(prompt('Escreva o número de meses: '))
const dias = Number(prompt('Escreva o número de dias: '))

// Meio da questão
const anos_dias = anos * 365
const meses_dias = meses * 30

// Somatório de dias
const sub_total = Number(prompt(anos_dias + meses_dias + dias))

// Impressão
console.log('O valor total em dias é: ', sub_total, 'dias')