// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 100
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal'

const corUsuario = 'Red'
const corPadrao = corUsuario || 'Black'

console.log(nivelUsuario, corPadrao)

// if (pontuacaoUsuario >= 1000) {
//   console.log('Usuário VIP')
// } else {
//   console.log('Usuário Normal')
// }
