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
    this.mesas = [];
    this.reservas = [];
  }
  
  buscarMesaDisponivel(qtdPessoas, localPreferencia) {
    return this.mesas.find(
      (mesa) =>
        ! mesa.ocupada &&
        mesa.capacidade >= qtdPessoas &&
        mesa.verificarLocal(localPreferencia)
    );
  }
  
  adicionarReserva(reserva) {
    this.reservas.push(reserva);
  }
}

class Mesa {
  constructor(numero, capacidade, local) {
    this.numero = numero;
    this.capacidade = capacidade;
    this.local = local;
    this.ocupado = false;
  }
  
    verificarLocal(localPreferencia) {
    return this.local === localPreferencia;
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

  const cliente1 = new Cliente('Luiz', '123.456.789-00');

  const restaurante1 = new Restaurante(
    'CocoBambu',
    'Av. Kennedy, 700 - São Bernardo do Campo'
  );

  restaurante1.adicionarMesa(new Mesa(1, 2, 'Salao'));
  restaurante1.adicionarMesa(new Mesa(2, 4, 'Salao'));
  restaurante1.adicionarMesa(new Mesa(3, 4, 'Jardim'));
  restaurante1.adicionarMesa(new Mesa(4, 6, 'Jardim'));


  const reserva1 = new Reserva(
    cliente1,
    restaurante1,
    4,
    'Salao',
    'noite'
  );

  reserva1.confirmarReserva();

  console.log(reserva1);
