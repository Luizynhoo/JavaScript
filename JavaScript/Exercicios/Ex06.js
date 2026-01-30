function contarMaioresDeIdade(lista) {
  
let maiorIdade = 0
  
for (let i = 0; i < lista.length; i++) {
  let usuario = lista[i];
  
  if(usuario.idade >= 18){
    maiorIdade ++
  }
}

return maiorIdade

}

  let usuarios = [
  { nome: "Ana", idade: 17 },
  { nome: "Bruno", idade: 22 },
  { nome: "Carla", idade: 18 },
  { nome: "Diego", idade: 15 }
];

console.log(contarMaioresDeIdade(usuarios))
