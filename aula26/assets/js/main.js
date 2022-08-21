function calcularIMC() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  function pegarEventoFormulario(evento) {
    evento.preventDefault()

    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const imc = peso.value / altura.value ** 2

    if (!altura.value && !peso.value) {
      resultado.classList.remove('green')
      resultado.classList.add('red')
      resultado.innerHTML = `Altura e Peso inválidos`
    } else if (!altura.value || altura.value <= 0) {
      resultado.classList.remove('green')
      resultado.classList.add('red')
      resultado.innerHTML = `Altura inválida`
    } else if (!peso.value || peso.value <= 0) {
      resultado.classList.remove('green')
      resultado.classList.add('red')
      resultado.innerHTML = `Peso inválido`
    } else if (imc < 18.5) {
      resultado.classList.remove('red')
      resultado.classList.add('green')
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)`
    } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.classList.remove('red')
      resultado.classList.add('green')
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`
    } else if (imc >= 25.0 && imc <= 29.9) {
      resultado.classList.remove('red')
      resultado.classList.add('green')
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.classList.remove('red')
      resultado.classList.add('green')
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
    } else if (imc >= 35 && imc <= 39.9) {
      resultado.classList.remove('red')
      resultado.classList.add('green')
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
    } else if (imc > 40) {
      resultado.classList.remove('red')
      resultado.classList.add('green')
      resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`
    }
  }

  form.addEventListener('submit', pegarEventoFormulario)
}

calcularIMC()
