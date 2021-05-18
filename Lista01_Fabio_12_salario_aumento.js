const prompt = require('prompt-sync')()

// Entrada
console.log('Um trabalhador ganha um salário mínimo:')
sal = Number(prompt('Digite aqui o seu salário: '))

// Processamento
sal_bonus = (sal * 0.25) + sal

// Final
console.log('Seu novo salário será: ', sal_bonus)