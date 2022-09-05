/* 
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

//Já vimos
Object.keys (retorna chaves)
Object.freeze (congela objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' }

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor)
}
