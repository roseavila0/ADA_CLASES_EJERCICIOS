/*
2. Florería: Envío Programado de Pedidos

Crea un sistema que gestione el envío de pedidos de flores. Cada pedido debe
contener el nombre del cliente, la cantidad de flores y el tipo de flores.
Implementa las siguientes funciones:
• Añadir un pedido.
• Programar el envío de un pedido utilizando setTimeout() para simular un
retraso de 5 segundos.
• Mostrar todos los pedidos pendientes.
*/
console.log("----------------------------------------------------------------")
console.log("FLORERÍA JESUSA")
console.log("----------------------------------------------------------------")

type Pedido = {
    nombreCliente:string
    cantidad:number
    tipoDeFlores:string
}

const listaDeEnvioDePedidos: Pedido[] = [];

//• Añadir un pedido.
function agregarPedido(nombreCliente:string, cantidad:number, tipoDeFlores:string){
    listaDeEnvioDePedidos.push({nombreCliente, cantidad, tipoDeFlores})
    console.log(`Pedido del cliente ${nombreCliente} agregado con éxito.`);
}

//• Programar el envío de un pedido utilizando setTimeout() para simular un retraso de 5 segundos.
function programarEnvio (nombreCliente:string){ 
    console.log(`📦 Programando envío para ${nombreCliente} espere 5 segundos.`);
    setTimeout(()=>{
        const productoPorEnviar = listaDeEnvioDePedidos.find(pedido => pedido.nombreCliente === nombreCliente)
        if (productoPorEnviar) {
            console.log(`🚚 Pedido de ${productoPorEnviar.nombreCliente} con ${productoPorEnviar.cantidad} ${productoPorEnviar.tipoDeFlores} está en camino.`);
        } else {
            console.log("⚠️ Cliente no encontrado en la lista de pedidos.");
        }
    },5000)
}

//• Mostrar todos los pedidos pendientes.
function mostrarPedidosPendientes(){
    console.log("📋 Pedidos pendientes:");
    if (listaDeEnvioDePedidos.length === 0) {
        console.log("No hay pedidos pendientes.");
    } else {
        listaDeEnvioDePedidos.forEach(function (pedido) {
            console.log(`Cliente: ${pedido.nombreCliente}, Cantidad: ${pedido.cantidad}, Tipo: ${pedido.tipoDeFlores}`);
        });
    }
}

agregarPedido("Natalia", 1, "Ramos de rosa rojas.");
agregarPedido("Emiliano", 3, "Arreglos de lírios.");
agregarPedido("Max", 1, "caja de girasoles.");


mostrarPedidosPendientes();

programarEnvio("Emiliano");




//OTRA FORMA DE RESOLVER
/*
// Definimos la tupla para el pedido
type PedidoFlor = [string, number, string]; // [nombreCliente, cantidad, tipoFlor]

// Creamos una lista de pedidos
let pedidos: PedidoFlor[] = [];

// Función para añadir un nuevo pedido
function agregarPedido(nombreCliente: string, cantidad: number, tipoFlor: string) {
    const nuevoPedido: PedidoFlor = [nombreCliente, cantidad, tipoFlor];
    pedidos.push(nuevoPedido);
    console.log(`Pedido añadido para ${nombreCliente}.`);
}

// Función para programar el envío de un pedido
function enviarPedido(indice: number) {
    setTimeout(() => {
        if (pedidos[indice]) {
            console.log(`El pedido para ${pedidos[indice][0]} ha sido enviado.`);
            pedidos.splice(indice, 1); // Eliminar el pedido de la lista
        } else {
            console.log("Pedido no encontrado.");
        }
    }, 5000); // Después de 5 segundos
}

// Función para mostrar los pedidos
function mostrarPedidos() {
    console.log("Pedidos pendientes de envío:");
    pedidos.forEach((pedido, indice) => {
        console.log(`${indice}: Cliente: ${pedido[0]}, Cantidad: ${pedido[1]}, Tipo de Flor: ${pedido[2]}`);
    });
}

// Añadimos algunos pedidos
agregarPedido("Juan", 12, "Rosas");
agregarPedido("Ana", 5, "Tulipanes");

// Mostramos los pedidos
mostrarPedidos();

// Simulamos el envío del primer pedido
enviarPedido(0);

*/





//VERSION USANDO CLASES
/*
// Clase para representar un arreglo floral
class ArregloFloral {
  id: number;
  tipoFlor: string;
  cantidad: number;
  cliente: string;

  constructor(id: number, tipoFlor: string, cantidad: number, cliente: string) {
    this.id = id;
    this.tipoFlor = tipoFlor;
    this.cantidad = cantidad;
    this.cliente = cliente;
  }

  preparar() {
    console.log(`🌸 Preparando el arreglo #${this.id} para ${this.cliente}...`);

    setTimeout(() => {
      console.log(`✅ Arreglo #${this.id} de ${this.cantidad} ${this.tipoFlor}(es) para ${this.cliente} está listo.`);
    }, 5000); // se simula un tiempo de preparación de 5 segundos
  }
}

// Clase para gestionar la florería
class Floreria {
  arreglos: ArregloFloral[] = [];

  agregarArreglo(arreglo: ArregloFloral) {
    this.arreglos.push(arreglo);
    console.log(`📝 Arreglo añadido para ${arreglo.cliente}.`);
    arreglo.preparar();
  }

  mostrarArreglos() {
    if (this.arreglos.length === 0) {
      console.log("🚫 No hay arreglos registrados.");
    } else {
      console.log("🌼 Lista de arreglos:");
      this.arreglos.forEach(a => {
        console.log(`• #${a.id}: ${a.cantidad} ${a.tipoFlor}(es) para ${a.cliente}`);
      });
    }
  }
}
  */
 
