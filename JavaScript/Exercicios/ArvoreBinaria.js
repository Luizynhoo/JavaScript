class Node {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita =  null;
  }
}

class ArvoreBinaria {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const novoNo = new Node(valor);

    if (this.raiz === null) {
      this.raiz = novoNo;
      return;
    }

    let atual = this.raiz;

    while (true) {
      if (valor < atual.valor) {
        
        if (atual.esquerda === null) {
          atual.esquerda = novoNo;
          return;
        }
        
        atual = atual.esquerda;
        
      } else {
        
        if (atual.direita === null) {
          atual.direita = novoNo;
          return;
        }
        
        atual = atual.direita;
      }
    }
  }
  
  percorrerEmOrdem(no) {
  if (no !== null) {
    this.percorrerEmOrdem(no.esquerda);
    console.log(no.valor);
    this.percorrerEmOrdem(no.direita);
  }
}

}

let arvore = new ArvoreBinaria();

arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(3);
arvore.inserir(7);

arvore.percorrerEmOrdem(arvore.raiz);


//     10
//    /  \
//   5   15
//  / \
// 3   7
