// Escreva uma função que recebe um número e retorne o seguinte:
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e por 5 = FizzBuzz
// Número NÃO divisível por 3 e por 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o que receber
// Use a função com números de 0 a 1000

function getFizzBuzz(param) {
  const divisivel3 = numero => numero % 3 == 0
  const divisivel5 = numero => numero % 5 == 0

  if (typeof param !== 'number') return param
  if (param < 0 || param > 1000) return ''
  if (!divisivel3(param) && !divisivel5(param)) return param
  if (divisivel3(param) && divisivel5(param)) return 'FizzBuzz'
  if (divisivel3(param)) return 'Fizz'
  if (divisivel5(param)) return 'Buzz'
}

console.log(getFizzBuzz(9))
console.log(getFizzBuzz(230))
console.log(getFizzBuzz(510))
console.log(getFizzBuzz(532))
console.log(getFizzBuzz('WubaLubaDubDub'))
console.log(getFizzBuzz(5532))

for (let i = 0; i <= 1000; i++) {
  console.log(i, getFizzBuzz(i))
}
