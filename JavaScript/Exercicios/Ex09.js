class Usuario {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  
  verificarIdade(){
    if(this.idade >= 18) {
      return "Maior de idade";
    } else {
      return "Menor de idade";
    }
  }
}

let usuario1 = new Usuario("Ana", 17);
let usuario2 = new Usuario("Carlos", 25);

console.log(usuario1.verificarIdade());
console.log(usuario2.verificarIdade());
