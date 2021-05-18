const prompt = require('prompt-sync')()

// Entrada
console.log('Uma questão que aborde a produção de um latão e seus componentes:')
const kg_latao = Number(prompt('Digite quantos quilogramas de latão são oferecidos: '))

// Meio
const cobre = Number(prompt(kg_latao * 0.70))
const zinco = Number(prompt(kg_latao * 0.30))
const qnt_latao_total = Number(prompt(cobre + zinco))
console.log(qnt_latao_total)

// Saída
console.log('A quantidade final de cobre é: ', cobre, 'kg')
console.log('A quantidade final de zinco é: ', zinco, 'kg')
console.log('O sub total é de: ', qnt_latao_total)