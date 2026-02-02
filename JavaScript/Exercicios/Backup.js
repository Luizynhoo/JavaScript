const cliente1 = new Cliente('Luiz', '123.456.789-00');

const restaurante1 = new Restaurante(
  'CocoBambu',
  'Av. Kennedy, 700 - São Bernardo do Campo'
);

// Mesas
restaurante1.adicionarMesa(new Mesa(1, 2, 'Salao'));
restaurante1.adicionarMesa(new Mesa(2, 4, 'Salao'));
restaurante1.adicionarMesa(new Mesa(3, 4, 'Jardim'));
restaurante1.adicionarMesa(new Mesa(4, 6, 'Jardim'));

// Reserva
const reserva1 = new Reserva(
  cliente1,
  restaurante1,
  4,
  'Salao',
  'noite'
);

reserva1.confirmarReserva();

console.log(reserva1);
