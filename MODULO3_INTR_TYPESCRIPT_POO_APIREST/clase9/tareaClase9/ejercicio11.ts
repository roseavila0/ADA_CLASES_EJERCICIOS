/*
Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y
Polimorfismo
Crea un sistema de reservas para una peluquería. Define una clase Servicio con
atributos comunes como nombre, duracion, y precio. Luego, crea clases
concretas para diferentes servicios como CorteDeCabello y Manicura.
Implementa una clase Cliente y una clase Reserva que asocie clientes con
servicios. Usa polimorfismo para permitir la reserva de cualquier tipo de servicio
y encapsulamiento para gestionar la disponibilidad de horarios. 
*/

// Clase base Servicio
class Servicio {
  nombreDelServicio: string;
  duracion: number; // en minutos
  precio: number;

  constructor(nombreDelServicio: string, duracion: number, precio: number) {
    this.nombreDelServicio = nombreDelServicio;
    this.duracion = duracion;
    this.precio = precio;
  }
}

// Subclases con herencia
class CorteDeCabello extends Servicio {
  constructor() {
    super("Corte de Cabello", 30, 15);
  }
}

class Manicura extends Servicio {
  constructor() {
    super("Manicura", 45, 20);
  }
}

// Cliente
class Cliente {
  nombreCliente: string;

  constructor(nombreCliente: string) {
    this.nombreCliente = nombreCliente;
  }
}

// Reserva
class Reserva {
  private reservas: { cliente: Cliente; servicio: Servicio; horario: string }[] = [];

  reservar(cliente: Cliente, servicio: Servicio, horario: string): void {
    const yaReservado = this.reservas.some(r => r.horario === horario);
    if (yaReservado) {
      console.log(`El horario ${horario} ya está ocupado.`);
      return;
    }

    this.reservas.push({ cliente, servicio, horario });
    console.log(`Reserva confirmada para ${cliente.nombreCliente}: ${servicio.nombreDelServicio} a las ${horario}.`);
  }

  mostrarReservas(): void {
    console.log("Reservas confirmadas:");
    this.reservas.forEach(r =>
      console.log(`${r.cliente.nombreCliente} - ${r.servicio.nombreDelServicio} - ${r.horario}`)
    );
  }
}

// 🧪 Ejemplo de uso
const cliente1 = new Cliente("María");
const cliente2 = new Cliente("Laura");

const servicio1 = new CorteDeCabello();
const servicio2 = new Manicura();

const reservasHoy = new Reserva();

reservasHoy.reservar(cliente1, servicio1, "10:00");
reservasHoy.reservar(cliente2, servicio2, "10:00"); // este horario ya está ocupado
reservasHoy.reservar(cliente2, servicio2, "11:00");

reservasHoy.mostrarReservas();