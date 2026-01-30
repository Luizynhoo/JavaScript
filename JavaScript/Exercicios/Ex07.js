function atualizarUsuario(usuario) {
  if (usuario.idade < 18) {
    usuario.menorDeIdade = true;
  } else {
    usuario.menorDeIdade = false;
  }

  return usuario;
}

let u1 = { nome: "Ana", idade: 17 };
let u2 = { nome: "Carlos", idade: 25 };

console.log(atualizarUsuario(u1));
console.log(atualizarUsuario(u2));
