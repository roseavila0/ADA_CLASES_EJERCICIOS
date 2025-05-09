/*
Ejercicio 10: Sistema de Gestión de Inventario en una Tienda de Belleza
Crea un sistema de gestión de productos en una tienda de belleza. Define una
clase Producto con atributos como nombre, precio y categoria. Luego, crea una
clase Inventario que gestione un conjunto de productos y tenga métodos para
agregar, eliminar y buscar productos por categoría. Usa polimorfismo para
manejar diferentes tipos de productos, como Cosmetico, TratamientoCapilar,
etc.
*/

// Clase base Producto
export class Producto {
  nombre: string;
  precio: number;
  categoria: string;

  constructor(nombre: string, precio: number, categoria: string) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

// Subclases para aplicar polimorfismo
class Cosmetico extends Producto {
  constructor(nombre: string, precio: number) {
    super(nombre, precio, "Cosmetico");
  }
}

class TratamientoCapilar extends Producto {
  constructor(nombre: string, precio: number) {
    super(nombre, precio, "Tratamiento Capilar");
  }
}

// Clase Inventario
class Inventario {
  productos: Producto[] = [];

  agregar(producto: Producto): void {
    this.productos.push(producto);
    console.log(`Producto "${producto.nombre}" agregado al inventario.`);
  }

  eliminar(nombre: string): void {
    this.productos = this.productos.filter(p => p.nombre !== nombre);
    console.log(`Producto "${nombre}" eliminado del inventario.`);
  }

  buscarPorCategoria(categoria: string): Producto[] {
    const encontrados = this.productos.filter(p => p.categoria === categoria);
    console.log(`Productos en categoría "${categoria}":`);
    encontrados.forEach(p => console.log(`- ${p.nombre}, $${p.precio}`));
    return encontrados;
  }
}

// Prueba
const inventario = new Inventario();

const labial = new Cosmetico("Labial Rojo", 15);
const shampoo = new TratamientoCapilar("Shampoo Anticaída", 25);

inventario.agregar(labial);
inventario.agregar(shampoo);

inventario.buscarPorCategoria("Cosmetico");
inventario.eliminar("Labial Rojo");
