function random(min, max) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}

const min = 1
const max = 60
let rand = 10

while (rand !== 10) {
  rand = random(min, max)
  console.log(rand)
}

console.log('=-=-=-=-=-=-=-=-=-=-=')

do {
  // rand = random(min, max)
  console.log(rand)
} while (rand !== 10)

// let c = 0
// while (c < 6) {
//   rand = random(max, min)
//   console.log(rand)
//   c++
// }

/* const nome = 'Matheus'

let i = 0

while (i < nome.length) {
  console.log(nome[i])
  i++
}

console.log('Continua...'); */
