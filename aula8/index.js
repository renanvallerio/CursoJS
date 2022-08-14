/* 
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.9259
Luiz Otávio nasceu em 1989
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 33
const peso = 84
const altura = 1.8
let imc // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura)
anoNascimento = 2022 - idade

console.log(`
  ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg
  tem ${altura} de altura e seu IMC é de ${imc}
  ${nome} nasceu em ${anoNascimento}
`)
