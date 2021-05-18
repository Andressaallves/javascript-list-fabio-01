const prompt = require('prompt-sync')()

// Começo da questão
console.log('Mostrar dois números e seu inverso:')
a = Number(prompt('Digite aqui o primeiro número: '))
b = Number(prompt('Digite aqui o segundo número: '))

// Meio
inverso = b + "" + a

// Fim
console.log('A ordem inversa dos algarismos digitados é: ', inverso)