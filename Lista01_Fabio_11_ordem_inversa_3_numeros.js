const prompt = require('prompt-sync')()

// Entrada
console.log('Digite um número inteiro de 3 dígitos e escreva seu contrário:')
num = Number(prompt('Escreva o número de 3 algarismos: '))

// Processamento
centena = num / 100
resto = num % 100
dezena = resto / 10
unidade = resto % 10

// Fim da questão
console.log('A inversão de seus algarismos é: ', unidade, dezena, centena, sep ='')