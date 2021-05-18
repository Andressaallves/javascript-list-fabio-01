const prompt = require('prompt-sync')()

// Entrada
const vel_kmh = Number(prompt('Digite aqui a velocidade em km/h por gentileza: '))

// Processamento
const vel_ms = vel_kmh / 3.6

// Saída
console.log('A velocidade dada era de: ', vel_kmh, 'km/h')
console.log('A conversão será de: ', vel_ms, 'm/s')