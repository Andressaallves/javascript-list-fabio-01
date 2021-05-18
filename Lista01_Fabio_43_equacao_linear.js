const prompt = require('prompt-sync')()

// Entrada de valores para Geometria Analítica
console.log('Um programa que leia 2 variáveis(x e y) em um sistema de equações lineares:')
const a = Number(prompt('Digite um valor para a: '))
const b = Number(prompt('Digite um valor para b: '))
const c = Number(prompt('Digite um valor para c: '))
const d = Number(prompt('Digite um vaor para d: '))
const e = Number(prompt('Digite um valor para e: '))
const f = Number(prompt('Digite um valor para f: '))

// Meio da análise
const x = Number(prompt((a * e) - (b * d)) * ((c * e) - (b * f)) / a * b)
const y = Number(prompt((a * e) - (b * d)) * ((a * f) - (c * d)) / d * e)
const calculo_1 = Number(prompt(x + y))

// Fim da análise
print('A solução para a(s) equações lineares é: ', calculo_1)