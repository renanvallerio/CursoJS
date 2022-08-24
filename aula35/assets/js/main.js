const elementos = [
  { tag: 'p', texto: 'Frase 1' },
  { tag: 'div', texto: 'Frase 2' },
  { tag: 'footer', texto: 'Frase 3' },
  { tag: 'section', texto: 'Frase 4' }
]

container = document.querySelector('.container')

const [p, div, footer, section] = elementos

function elementCreator(element) {
  return `<${element.tag}>${element.texto}</${element.tag}>`
}

container.innerHTML += `
<div>
${elementCreator(p)}
${elementCreator(div)}
${elementCreator(footer)}
${elementCreator(section)}
</div>
`
// Correção

const divison = document.createElement('div')

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i]
  let elemento = document.createElement(tag)
  let textNode = document.createTextNode(texto)
  elemento.appendChild(textNode)
  divison.appendChild(elemento)
}

container.appendChild(divison)
