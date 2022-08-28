// Declaração de função (Function hoisting)
falaOi()
function falaOi() {
  console.log('Oi')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log('Sou um dado.')
}
souUmDado()

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log('Estou falando...')
  },
  dizer() {
    console.log('Estou dizendo...')
  }
}
obj.falar()
obj.dizer()

// Teste
let i = 0

const maisMais = () => i++

const repeat = setInterval(() => {
  maisMais()
  console.log(i)
}, 1000)

setTimeout(() => {
  clearInterval(repeat)
}, 6000)
