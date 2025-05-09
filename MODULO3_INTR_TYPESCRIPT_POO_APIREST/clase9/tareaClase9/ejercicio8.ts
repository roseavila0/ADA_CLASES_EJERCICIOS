/*
Ejercicio 8: Sistema de Nave Espacial con Gestión de Recursos
Crea un sistema para gestionar una nave espacial en una misión de recolección
de recursos en diferentes planetas. Define una clase NaveEspacial con atributos
como combustible y capacidadDeCarga. Implementa métodos para viajar entre
planetas, recolectar recursos (oxígeno, minerales, agua), y gestionar el
combustible. Usa tuplas para representar las coordenadas espaciales de los
planetas y una interfaz para los tipos de recursos recolectados.
*/


type coordenadas = [number, number, number];

interface TiposDeRecursosRecolectados {
  oro: string;
  agua: string;
  petroleo: string;
}

class NaveEspacial implements TiposDeRecursosRecolectados {
  combustible: string;
  capacidadDeCarga: number;
  oro: string;
  agua: string;
  petroleo: string;

  constructor(combustible: string, capacidadDeCarga: number, oro: string, agua: string, petroleo: string) {
    this.combustible = combustible;
    this.capacidadDeCarga = capacidadDeCarga;
    this.oro = oro;
    this.agua = agua;
    this.petroleo = petroleo;
  }

  viajarEntrePlanetas(origen: coordenadas, destino: coordenadas): void {
    console.log(`Viajando de ${origen} a ${destino}.`);
  }

  recolectarRecursos(oro: string, agua: string, petroleo: string): void {
    this.oro = oro;
    this.agua = agua;
    this.petroleo = petroleo;
      console.log(`Recursos recolectados: Oro=${this.oro}, Agua=${this.agua}, Petróleo=${this.petroleo}`);
  }

  gestionarCombustibles(): void {
    console.log(`Gestionando combustible...`);
  }
}

// Llamada correcta:
const naveEspacial1 = new NaveEspacial("1000", 500, "0", "0", "0");
naveEspacial1.viajarEntrePlanetas([0, 0, 0], [10, 5, 3]);
naveEspacial1.recolectarRecursos("200", "100", "300");
naveEspacial1.gestionarCombustibles();









 /* OTRA FORMA DE RESOLVER

 // Tupla para representar las coordenadas en el espacio (x, y, z)
type CoordenadasEspaciales = [number, number, number];

// Interfaz para los recursos recolectables
interface Recurso {
    nombre: string;
    cantidad: number;
}

// Clase Planeta
class Planeta {
    constructor(public nombre: string, public coordenadas: CoordenadasEspaciales, public recursos: Recurso[]) {}
}

// Clase NaveEspacial
class NaveEspacial {
    private combustible: number;
    private carga: Recurso[];
    private capacidadDeCarga: number;
    private posicionActual: CoordenadasEspaciales;

    constructor(combustibleInicial: number, capacidadDeCarga: number) {
        this.combustible = combustibleInicial;
        this.capacidadDeCarga = capacidadDeCarga;
        this.carga = [];
        this.posicionActual = [0, 0, 0]; // Posición inicial
    }

    // Método para viajar a un planeta
    viajar(planeta: Planeta): void {
        const distancia = this.calcularDistancia(this.posicionActual, planeta.coordenadas);
        const combustibleNecesario = distancia * 0.5; // El consumo es 0.5 unidades por cada unidad de distancia

        if (this.combustible >= combustibleNecesario) {
            this.combustible -= combustibleNecesario;
            this.posicionActual = planeta.coordenadas;
            console.log(`Viajaste al planeta ${planeta.nombre}. Combustible restante: ${this.combustible}`);
        } else {
            console.log("No tienes suficiente combustible para viajar.");
        }
    }

    // Método para recolectar recursos
    recolectarRecursos(planeta: Planeta): void {
        planeta.recursos.forEach((recurso) => {
            if (this.calcularCargaTotal() + recurso.cantidad <= this.capacidadDeCarga) {
                this.carga.push(recurso);
                console.log(`Recolectaste ${recurso.cantidad} unidades de ${recurso.nombre}`);
            } else {
                console.log(`No tienes suficiente espacio para recolectar más ${recurso.nombre}.`);
            }
        });
    }

    // Método para calcular la distancia entre dos puntos en el espacio
    private calcularDistancia(coord1: CoordenadasEspaciales, coord2: CoordenadasEspaciales): number {
        const [x1, y1, z1] = coord1;
        const [x2, y2, z2] = coord2;
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
    }

    // Método para calcular el peso total de la carga
    private calcularCargaTotal(): number {
        return this.carga.reduce((total, recurso) => total + recurso.cantidad, 0);
    }
}

// Ejemplo de uso
const planetaMarte = new Planeta("Marte", [100, 200, 300], [
    { nombre: "Oxígeno", cantidad: 50 },
    { nombre: "Minerales", cantidad: 30 },
]);

const miNave = new NaveEspacial(500, 100); // Combustible inicial: 500, Capacidad de carga: 100

miNave.viajar(planetaMarte);  // Viajamos a Marte
miNave.recolectarRecursos(planetaMarte);  // Recolectamos recursos de Marte
*/

