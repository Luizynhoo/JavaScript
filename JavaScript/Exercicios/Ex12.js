class Pedido {
  constructor(id, valor){
    this.id = id;
    this.valor = valor;
  }
}

let pedidosMap = new Map();

pedidosMap.set(1, new Pedido(1, 36));
pedidosMap.set(2, new Pedido(2, 117));
pedidosMap.set(3, new Pedido(3, 136));
pedidosMap.set(4, new Pedido(4, 43));

function contarPedidosMap(map){
  
  let caros = 0;
  let baratos = 0;
  
  for(let [id, pedido] of map) {
    if(pedido.valor > 100){
      caros ++;
    } else {
      baratos ++;
    }
  }
  
  return {
    caros, baratos
  };
}

console.log(contarPedidosMap(pedidosMap))
