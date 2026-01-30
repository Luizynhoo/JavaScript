function contarMaioresQueDez(lista) {
  let contador = 0;

  for (let i = 0; i < lista.length; i++) {
    let numero = lista[i];

    if (numero > 10) {
      contador++;
    }
  }

  return contador;
}

console.log(contarMaioresQueDez([5, 12, 18, 7, 20]));
