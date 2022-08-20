/* 
Entre 6 e 11 - Bom dia
Entre 12 e 17 - Boa tarde
Entre 18 e 23 - Boa noite
Entre 24 e 5  - Boa Madrugada
*/

// If pode ser usado sozinho
// Sempre um "else" for utilizado é preciso de um "if" antes
// Podem existir vários "else if" na checagem
// Podem existir apenas um "else" na checagem
// Podem existir condiçoes sem "else if", apenas com "if" e "if, else"

const tenhoGrana = NaN

if (tenhoGrana) {
  console.log('Vou sair de casa')
} else {
  console.log('Não vou sair de casa')
}

/* 
const hora = 17

if (hora >= 6 && hora <= 11) {
  console.log('Good Morning!')
} else if (hora >= 12 && hora <= 17) {
  console.log('Good Afternoon!')
} else if (hora >= 18 && hora <= 24) {
  console.log('Good Evening!')
} else if (hora >= 0 && hora <= 5) {
  console.log('Good Night!')
} else {
  console.log('Hello!')
}
 */
