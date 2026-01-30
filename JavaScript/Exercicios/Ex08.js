function atualizarUsuario(lista){
  for(let i = 0; i < lista.length; i++){
    let usuario = lista[i]
    
    if(usuario.idade >= 18) {
      usuario.permisao = true;
    } else {
      usuario.permisao = false
    }
  }
  return lista
}


let usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 18 },
  { nome: "Diego", idade: 15 }
];

console.log(atualizarUsuario(usuarios))
