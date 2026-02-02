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
  
  
  //arrumar isso depois
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
  
  
adicionarMesa(mesa) {
  if (mesa.capacidade >= this.qtdPessoas) {
    this.mesa = mesa; 
    this.status = 'confirmado';
    console.log(`Mesa ${mesa.numero} confirmada para ${this.cliente.nome}`);
    return 'confirmado';
  } else {
    this.status = 'cancelado';
    console.log("Mesa insuficiente para o número de pessoas.");
    return 'cancelado';
  }
}

}

const criarReserva = [
  cliente1 = new Cliente('Luiz', '123.456.789-00'),
  restaurante1 = new Restaurante('CocoBambu', 'Avenida Kennedy, 700 Bairro Jardim do Mar, São Bernardo do Campo', 20, []),
  mesa1 = new Mesa(1, 4, 'Salao'),
  reserva1 = new Reserva(cliente1, restaurante1, mesa1, 4, 'Salao', 'noite', ''),
  
  ]


console.log(reserva1);

class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }
}

class Mesa {
  constructor(numero, capacidade, local) {
    this.numero = numero;
    this.capacidade = capacidade;
    this.local = local;
    this.ocupada = false;
  }

  verificarLocal(localPreferencia) {
    return this.local === localPreferencia;
  }
}

class Restaurante {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
    this.mesas = [];
    this.reservas = [];
  }

  adicionarMesa(mesa) {
    this.mesas.push(mesa);
  }

  buscarMesaDisponivel(qtdPessoas, localPreferencia) {
    return this.mesas.find(
      (mesa) =>
        !mesa.ocupada &&
        mesa.capacidade >= qtdPessoas &&
        mesa.verificarLocal(localPreferencia)
    );
  }

  adicionarReserva(reserva) {
    this.reservas.push(reserva);
  }
}

class Reserva {
  constructor(cliente, restaurante, qtdPessoas, localPreferencia, periodo) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.qtdPessoas = qtdPessoas;
    this.localPreferencia = localPreferencia;
    this.periodo = periodo;
    this.mesa = null;
    this.status = 'pendente';
  }

  verificarPeriodo() {
    const periodosValidos = ['manha', 'tarde', 'noite'];
    return periodosValidos.includes(this.periodo);
  }

  confirmarReserva() {
    if (!this.verificarPeriodo()) {
      console.log('Período inválido para reserva.');
      this.status = 'cancelado';
      return;
    }

    const mesaDisponivel = this.restaurante.buscarMesaDisponivel(
      this.qtdPessoas,
      this.localPreferencia
    );

    if (!mesaDisponivel) {
      console.log('Nenhuma mesa disponível para essa reserva.');
      this.status = 'cancelado';
      return;
    }

    this.mesa = mesaDisponivel;
    this.mesa.ocupada = true;
    this.status = 'confirmado';

    this.restaurante.adicionarReserva(this);

    console.log(
      `Reserva confirmada para ${this.cliente.nome} na mesa ${this.mesa.numero}`
    );
  }
}


