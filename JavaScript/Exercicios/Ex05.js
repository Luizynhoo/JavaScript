function verificarIdade(usuario){
  if(usuario.idade > 18 || usuario.idade === 18){
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}

let usuario1 = { nome: "Ana", idade: 17 };
let usuario2 = { nome: "Carlos", idade: 25 };

console.log(verificarIdade(usuario1));
console.log(verificarIdade(usuario2));
