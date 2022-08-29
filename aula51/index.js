function criaMultiplicador(multiplicador) {
  //multiplicador
  return function (n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
const quintuplica = criaMultiplicador(5)

console.log(duplica(4))
console.log(triplica(4))
console.log(quadriplica(4))
console.log(quintuplica(4))
