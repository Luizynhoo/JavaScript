class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}

class Restaurante {
  constructor(nome, endereco, mesas, reservas) {
    this.nome = nome;
    this.endereco = endereco;
    this.mesas = mesas;
    this.reservas = reservas || [];
  }
}

class Mesa {
  constructor(numero, capacidade, local) {
    this.numero = numero;
    this.capacidade = capacidade;
    this.local = local;
  }
  
  verificarLocal() {
    const locaisValidos = ['Salao', 'Jardim'];
    if (locaisValidos.includes(this.local)) {
      console.log(`Local da mesa: ${this.local}`);
      return true;
    } else {
      console.log("Não temos esse local no nosso restaurante");
      return false;
    }
  }
}

class Reserva {
  constructor(cliente, restaurante, mesa, qtdPessoas, localPreferencia, periodo, status) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.mesa = mesa;
    this.qtdPessoas = qtdPessoas;
    this.localPreferencia = localPreferencia;
    this.periodo = periodo;
    this.status = status || 'pendente';
  }
  
  verificarPeriodo() {
    const periodosValidos = ['manha', 'tarde', 'noite'];
    if (periodosValidos.includes(this.periodo)) {
      console.log(`Período da reserva: ${this.periodo}`);
      return true;
    } else {
      console.log("Só podemos criar a sua reserva no período da manhã, tarde ou noite");
      return false;
    }
  }
}

const cliente1 = new Cliente('Luiz', '123.456.789-00');
const restaurante1 = new Restaurante('CocoBambu', 'Avenida Kennedy, 700 Bairro Jardim do Mar, São Bernardo do Campo', 20, []);
const mesa1 = new Mesa(1, 4, 'Salao');
const reserva1 = new Reserva(cliente1, restaurante1, mesa1, 4, 'Salao', 'noite', 'confirmado');

console.log(reserva1);
