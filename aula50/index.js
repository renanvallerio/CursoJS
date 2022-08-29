//arguments sustenta todos os argumentos enviados
function funcao(a, b, c) {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  // console.log(arguments)
  console.log(total, a, b, c)
}
funcao(3, 6, 9, 12)

//rest operator
const conta = (...args) => {
  console.log(args);
}

conta('+', 1, 20, 30, 40)