function inverter() {
  let fraseCapturada = document.getElementById('frase').value

  function inverterFrase(frase) {
    return frase.split('').reverse().join('')
  }

  document.getElementById('fraseTrocada').innerHTML =
    inverterFrase(fraseCapturada)
}
