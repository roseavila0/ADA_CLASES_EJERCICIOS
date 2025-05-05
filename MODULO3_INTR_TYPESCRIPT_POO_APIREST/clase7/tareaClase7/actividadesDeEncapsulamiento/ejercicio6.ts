/*
6. Ejercicio de Supermercado
Crea una clase Producto que contenga propiedades privadas como nombre,
precio y cantidad. Utiliza getters y setters, asegurándote de que precio no sea
negativo y que cantidad no sea menor que 0.
*/

export class Producto {
    private _nombre!: string;
    private _precio!: number;
    private _cantidad!: number;

    constructor(nombre: string, precio: number, cantidad: number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string){
        this._nombre = value
    }
 
    public get precio(): number{
        return this._precio;
    }

    //que precio no sea negativo 
    public set precio(value: number){
        if (value < 0) {
            throw new Error("El precio no puede ser negativo.");
        }
            this._precio= value;
    }
    

    public get cantidad(): number{
        return this._cantidad;
    }
    
    //que cantidad no sea menor que 0.
    public set cantidad (value: number){
        if (value < 0) {
            throw new Error("La cantidad no puede ser menor que cero.");
        }
            this._cantidad= value;
        }    
    }


 //Producto válido
const producto1= new Producto ("Shampoo de manzanilla", 4.40 , 2)
console.log(`Nombre del Producto: ${producto1.nombre}.`);
console.log(`Precio: $ ${producto1.precio}`);
console.log(`Cantidad de artículos: ${producto1.cantidad}`);


// Producto inválido (usamos try/catch para evitar que se caiga el programa)
try {
    const producto2 = new Producto("Bloqueador solar.", -25 , 0);
    console.log(`✅ Nombre del Producto: ${producto2.nombre}`);
    console.log(`Precio: $${producto2.precio}`);
    console.log(`Cantidad de artículos: ${producto2.cantidad}`);
} catch (error: any) {
    console.log(`❌ Error al crear el producto2: ${error.message}`);
}

 //Producto válido
 const producto3= new Producto ("Talco para pies", 3.50 , 1)
 console.log(`Nombre del Producto: ${producto3.nombre}.`);
 console.log(`Precio: $ ${producto3.precio}`);
 console.log(`Cantidad de artículos: ${producto3.cantidad}`);


