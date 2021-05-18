const prompt = require('prompt-sync')()

// Entrada
console.log('Leia um valor em reais: ')
salario = Number(prompt('Calcule 70 % desse valor em reais: '))

// Meio da questão
bonus = salario * 0.70

// Fim
console.log('O valor que representa 70 % do seu salário é: ', bonus)
