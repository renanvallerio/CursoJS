// Escreva uma função que recebe 2 números e retorne o maior deles

function higherNumber(x = 0, y = 0) {
  if (x > y) return x
  return y
}

console.log(higherNumber(10, 4))
console.log(higherNumber(6, 12))

console.log('')

// Correção

function max(x, y) {
  return x > y ? x : y
}

console.log(max(1, 2))
console.log(max(10, 2))

console.log('')

const max2 = (x, y) => (x > y ? x : y)

console.log(max2(10, 20))
console.log(max2(100, 20))
