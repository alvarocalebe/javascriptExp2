let list = []

list = [{
  name: "Junior",
  nota1: 7,
  nota2: 8,
}, {
  name: "Marcelo",
  nota1: 9,
  nota2: 9,
}, {
  name: "Julia",
  nota1: 5,
  nota2: 7,
}
]

for (let candidato of list) {
  let noteMessage = media(candidato)
  console.log(noteMessage)
}

function media(candidato) {
  if (((candidato.nota1 + candidato.nota2)/2) >= 7) {
    return `O candidato ${candidato.name} foi aprovado com a media de ${(candidato.nota1+candidato.nota2)/2}`
  }
  else{
    return `O candidato ${candidato.name} foi reprovado com a media de ${(candidato.nota1+candidato.nota2)/2}`
  }
}