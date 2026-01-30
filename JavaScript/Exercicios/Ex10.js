class Produto {
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
  }
  
  aplicarDesconto(desconto){
    const valorDesconto = (desconto/100) * this.preco;
    this.preco = this.preco - valorDesconto
  }
  
 verificarPreco(){
    if(this.preco > 100){
      return "Produto caro"
  } else {
    return "Produto barato"
  }
  
}
}

let p1 = new Produto("Mouse", 80);
let p2 = new Produto("Teclado", 120);
let p3 = new Produto("fone", 200);

p3.aplicarDesconto(10);

console.log(p3.preco)
console.log(p1.verificarPreco());
console.log(p2.verificarPreco());
