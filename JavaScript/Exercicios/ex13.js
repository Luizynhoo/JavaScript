class Pedido {
  constructor(id, valor){
    this.id = id;
    this.valor = valor;
  }
}

let pedidos = [
    new Pedido(1, 17),
    new Pedido(2, 121),
    new Pedido(3, 111),
    new Pedido(4, 27)
  ];
  
  let pedidosMap = new Map();
  
  for (let pedido of pedidos) {
    pedidosMap.set (pedido.id, pedido);
  }
  
  let pedidoBuscado = pedidosMap.get(3);
  
  if(pedidoBuscado > 100) {
    console.log("Pedido Caro") 
  } else {
    console.log("Pedido barato")
  }
