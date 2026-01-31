class Pedido {
  constructor(id, valor){
    this.id = id;
    this.valor = valor;
  }
  
  verificarValor(){
    if(this.valor > 100){
      return "alto"
    } else {
      return "baixo"
    }
  }
}

let pedidos = [
  new Pedido(1,  25),
  new Pedido(2,  50),
  new Pedido(3, 175),
  new Pedido(4, 124)
];

for (let i = 0; i < pedidos.length; i++){
  let pedidoAtual = pedidos[i];
  let classificacao = pedidoAtual.verificarValor();
  
  console.log(`Pedido ${pedidoAtual.id} - ${classificacao}`)
}

function contarPedidos(listaDePedidos) {
  let altos = 0;
  let baixos = 0;
  
  for (let i = 0; i < listaDePedidos.length; i++){
    let pedido = listaDePedidos[i];
    
    if(pedido.valor > 100){
      altos++
    } else {
      baixos ++
    }
  }
  
  return {
    altos: altos,
    baixo: baixos
  }
}

console.log(contarPedidos(pedidos));
