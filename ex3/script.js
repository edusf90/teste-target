const getData = () => {
  // let nomePego = document.getElementById('nome').value

  const data = dadosDeVendas
  let maiorMes = 0,
    med = 0,
    cont = 0
  let menorMes = 9
  data.map(item => {
    // O menor valor de faturamento ocorrido em um dia do mês;, tirando os dias que são R$0,00
    if (menorMes > item.valor && item.valor > 0) {
      menorMes = item.valor
    }

    // O maior valor de faturamento ocorrido em um dia do mês;
    if (maiorMes <= item.valor) {
      maiorMes = item.valor
    }

    //Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    if (item.valor > 0) {
      med = med + item.valor
      cont = cont + 1
    }
    media = med / cont
  })
  console.log(`Menor Mês: R$ ${menorMes.toFixed(2)}`)
  document.getElementById(
    'menorMesFaturado'
  ).innerHTML = `Menor Mês: R$ ${menorMes.toFixed(2)}`

  console.log(`Maior Mês: R$ ${maiorMes.toFixed(2)}`)
  document.getElementById(
    'maiorMesFaturado'
  ).innerHTML = `Maior Mês: R$ ${maiorMes.toFixed(2)}`

  console.log(`Média do Mês: R$ ${media.toFixed(2)}`)
  document.getElementById(
    'mediaMensal'
  ).innerHTML = `Média Mês: R$ ${media.toFixed(2)}`
}

getData()
