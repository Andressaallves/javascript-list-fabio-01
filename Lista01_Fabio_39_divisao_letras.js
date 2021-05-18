const prompt = require('prompt-sync')()

// Entrada
console.log('Um programa que receba ler 3 inteiros positivos com a expressão:')
const a = Number(prompt('Digite um valor para A: '))
const b = Number(prompt('Digite um valor para B: '))
const c = Number(prompt('Digite um valor para C: '))

// Calcular o quarto valor para a expressão
const r = Number(prompt(a + b) ** 2)
const s = Number(prompt(b + c) ** 2)
const d = Number(prompt(r + s) / 2)

// Final da expressão
console.log('O resultado para a expressaõ será: ', d)
