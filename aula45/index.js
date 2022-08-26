function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date.')
  }

  if (!data) {
    data = new Date()
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const data = new Date('02-02-1980 12:58:12')
  const hora = retornaHora()
  console.log(hora)
} catch (e) {
  // Tratar erro
  // console.log(e);
} finally {
  console.log('Tenha um bom dia')
}

/* try {
  // é executado quando não há erros
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  // console.log(a);
  console.log('Talvez fechei o arquivo');

  try {
    console.log(b);
  } catch(e) {
    console.log('Deu erro');
  } finally {
    console.log('Também sou finnaly');
  }

} catch (e) {
  // é executado quando há erros
  console.log('Tratando o erro');
} finally {
  // é executado Sempre
  console.log('Finally: Eu sempre sou executado');
}
 */
