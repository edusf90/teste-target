// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function mostrarNumero() {
  let numeroInformado = document.getElementById('numero').value

  if (numeroInformado == '' || numeroInformado <= 0) {
    alert('Número vazio ou menor e igual a 0')
  } else {
    let num1 = 1,
      num2 = 0,
      res = 0

    for (let i = 2; i <= numeroInformado; i++) {
      res = num1 + num2
      num2 = num1
      num1 = res
      console.log(res)
      if (numeroInformado == res) {
        document.getElementById('spanResultado').innerHTML =
          'Sim, esta na sequência'
        break
      } else if (numeroInformado < res) {
        document.getElementById('spanResultado').innerHTML =
          'Não, não esta na sequência'
        break
      }
    }
  }
}
