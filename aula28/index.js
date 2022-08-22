function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate())
  const mes = zeroAEsquerda(data.getMonth() + 1)
  const ano = zeroAEsquerda(data.getFullYear())
  const hora = zeroAEsquerda(data.getHours())
  const min = zeroAEsquerda(data.getMinutes())
  const seg = zeroAEsquerda(data.getSeconds())

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil)











// const dezHoras = 60 * 60 * 10 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + dezHoras - umDia) // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2022, 3) // ano, mês, dia, hora, minuto, segundo, milésimo de segundo
// const data = new Date('2022-08-21 17:42:22')
// const data = new Date('2022-08-21T17:42:22.100')
// const data = new Date(1661140280323)
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1)
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minuto', data.getMinutes())
// console.log('Segundo', data.getSeconds())
// console.log('Milésimo', data.getMilliseconds())
// console.log('Dia Semana', data.getDay())
// console.log(data.toString())
// console.log(Date.now())
