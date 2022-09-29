// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let sp = 67836.43,
  rj = 36678.66,
  mg = 29229.88,
  es = 27165.48,
  outros = 19849.53,
  soma = 0

soma = sp + rj + mg + es + outros
console.log(soma)

function porcentagem(estado) {
  return (estado * 100) / soma
}
console.log('SP % = ' + porcentagem(sp).toFixed(2))
console.log('RJ % = ' + porcentagem(rj).toFixed(2))
console.log('MG % = ' + porcentagem(mg).toFixed(2))
console.log('ES % = ' + porcentagem(es).toFixed(2))
console.log('Outros % = ' + porcentagem(outros).toFixed(2))
