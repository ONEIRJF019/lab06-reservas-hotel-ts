class Reserva {
  numeroQuarto: number;
  nomeHospede: string;
  dataEntrada: Date;
  dataSaida: Date;

  constructor(numeroQuarto: number, nomeHospede: string, dataEntrada: Date, dataSaida: Date) {
    this.numeroQuarto = numeroQuarto;
    this.nomeHospede = nomeHospede;
    this.dataEntrada = dataEntrada;
    this.dataSaida = dataSaida;
  }
}

class Hotel {
  private reservas: Reserva[] = [];

  registrarReserva(reserva: Reserva): void {
    const jaExiste = this.reservas.find(r => r.numeroQuarto === reserva.numeroQuarto);
    if (jaExiste) {
      console.log(`Quarto ${reserva.numeroQuarto} já está reservado.`);
      return;
    }
    this.reservas.push(reserva);
    console.log(`Reserva do quarto ${reserva.numeroQuarto} para "${reserva.nomeHospede}" registrada com sucesso.`);
  }

  cancelarReserva(numeroQuarto: number): void {
    const index = this.reservas.findIndex(r => r.numeroQuarto === numeroQuarto);
    if (index === -1) {
      console.log(`Nenhuma reserva encontrada para o quarto ${numeroQuarto}.`);
      return;
    }
    this.reservas.splice(index, 1);
    console.log(`Reserva do quarto ${numeroQuarto} cancelada com sucesso.`);
  }

  consultarStatusQuarto(numeroQuarto: number): string {
    const reserva = this.reservas.find(r => r.numeroQuarto === numeroQuarto);
    return reserva ? "Reservado" : "Disponível";
  }
}

function registrarReservas(hotel: Hotel): void {
  const reserva1 = new Reserva(101, "João Pereira", new Date("2025-06-01"), new Date("2025-06-05"));
  const reserva2 = new Reserva(202, "Fernanda Lima", new Date("2025-06-03"), new Date("2025-06-07"));

  hotel.registrarReserva(reserva1);
  hotel.registrarReserva(reserva2);
}

function cancelarReserva(hotel: Hotel, numeroQuarto: number): void {
  hotel.cancelarReserva(numeroQuarto);
}

function consultarStatus(hotel: Hotel, numeroQuarto: number): void {
  const status: string = hotel.consultarStatusQuarto(numeroQuarto);
  console.log(`Status do quarto ${numeroQuarto}: ${status}`);
}

const meuHotel = new Hotel();

registrarReservas(meuHotel);
cancelarReserva(meuHotel, 101);
consultarStatus(meuHotel, 101);
consultarStatus(meuHotel, 202);
consultarStatus(meuHotel, 303);