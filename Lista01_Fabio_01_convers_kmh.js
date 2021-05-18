const prompt = require('prompt-sync')()

// Entrada da questão
const vel_ms = Number(prompt('Digite aqui a velocidade em m/s por gentileza: '))

// Cálculo do Sistema Internacional de Medidas/ Processamento
const vel_kmh = vel_ms * 3.6

// Fim da questão ou impressão de tela
console.log('A velocidade convertida será: ', vel_kmh, 'km/h')
console.log('A velocidade armazenada era: ', vel_ms, 'm/s')

