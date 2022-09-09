// 705.484.450-52 / 070.987.720.03
/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0  10= 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

/* let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo)
console.log(cpfArray.reduce((ac,val) => ac + Number(val), 0)) 
*/

function ValidaCPF(cpf) {
  this.cpf = cpf
  this.cpfLimpo = cpf.replace(/\D+/g, '')

  this.primeiroDigito = () => {
    let cpfArray = Array.from(this.cpfLimpo)
    let cpfPronto = cpfArray.slice(0, -2)
    let count = 10
    let cpfMultiplicado = cpfPronto.map(valor => {
      const result = Number(valor) * count
      count--
      return result
    })
    let cpfSomado = cpfMultiplicado.reduce((ac, valor) => ac + valor)
    const conta = 11 - (cpfSomado % 11)
    return conta <= 9 ? conta : 0
  }

  this.segundoDigito = () => {
    let cpfArray = Array.from(this.cpfLimpo)
    let cpfPronto = cpfArray.slice(0, -1)
    let count = 11
    let cpfMultiplicado = cpfPronto.map(valor => {
      const result = Number(valor) * count
      count--
      return result
    })
    let cpfSomado = cpfMultiplicado.reduce((ac, valor) => ac + valor)
    const conta = 11 - (cpfSomado % 11)
    return conta <= 9 ? conta : 0
  }

  this.isSequencia = () => {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
  }

  this.cpfIsValid = () => {
    let cpfArray = Array.from(this.cpfLimpo)
    let cpfMenosDois = cpfArray.slice(0, -2).toString().replaceAll(',', '')
    let cpfPronto = cpfMenosDois + this.primeiroDigito() + this.segundoDigito()
    if (this.isSequencia()) return false

    return cpfPronto === this.cpfLimpo
  }
}

const luiz = new ValidaCPF('705.484.450-52')
// console.log(luiz.primeiroDigito())
// console.log(luiz.segundoDigito())
console.log(luiz.cpfIsValid())

// Correção

function ValidaCPF2(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '')
    }
  })
}

ValidaCPF2.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false
  if (this.cpfLimpo.length !== 11) return false
  if (this.isSequencia()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)

  const cpfNovo = cpfParcial + digito1 + digito2
  return cpfNovo === this.cpfLimpo
}

ValidaCPF2.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial)

  let regressivo = cpfArray.length + 1
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val)
    regressivo--
    return ac
  }, 0)

  const digito = 11 - (total % 11)
  return digito > 9 ? '0' : String(digito)
}

ValidaCPF2.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF2('705.484.450-52')
if (cpf.valida()) {
  console.log('CPF VÁLIDO')
} else {
  console.log('CPF INVÁLIDO')
}
