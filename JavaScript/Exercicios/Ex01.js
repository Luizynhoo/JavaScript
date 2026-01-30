function verificarNumero(numero) {
  if (numero < 0){
    return "negativo"
  }else if (numero === 0){
    return "zero"
  } else {
    return "positivo"
  }
}

function analisarLista(lista){
  let negativos = 0;
  let positivos = 0;
  let zeros= 0;
  
  for(let i = 0; i < lista.length; i++){
    let numero = lista[i];
    
  if (numero < 0){
    negativos++;
  }else if (numero === 0){
    zeros++;
  } else {
    positivos++;
  }
  
  console.log(`Número ${numero} é ${verificarNumero(numero)}`);
  }
  
  return{
    positivos: positivos,
    negativos: negativos,
    zeros: zeros,
  }
}


let numeros = [10, -5, 0, 7, -2, 0, 3];
let resultado = analisarLista(numeros);

console.log("Resumo:", resultado);
