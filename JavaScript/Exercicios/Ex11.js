//Etapa 01

class Pedido {
  constructor(id, valor){
    this.id = id;
    this.valor = valor;
  }
  
  verificarValor(){
    if(this.valor > 100){
      return "Alto"
    } else {
      return "Baixo"
    }
  }
}

//Etapa 02

const pedidos = [
    new Pedido (1, 40),
    new Pedido (2, 75),
    new Pedido (3, 124),
    new Pedido (4, 215)
  ];
  
  for(let pedido of pedidos) {
    console.log(`Pedido ${pedido.id} - ${pedido.verificarValor()}`);
  };
  
  //Etapa 03
  
  function contarPedidos(lista){
    
    let altos = 0;
    let baixos = 0;
    
    for(let pedido of lista){
      if(pedido. valor > 100){
        altos ++
      } else {
        baixos++
      }
    }
    
    return (altos, baixos)
  }
  
  console.log(`Pedidos altos : ${contarPedidos(pedidos)}`);
  
  
