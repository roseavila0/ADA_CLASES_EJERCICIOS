/*
Ejercicio 4: Clases y Objetos
1. Define una clase llamada Animal con propiedades nombre y tipo, y un
método hacerSonido().
2. Crea una instancia de la clase Animal y llama al método.
*/

export class Animal {
    //propiedades
    public nombre: string;
    public tipo: string;
    public sonido: string;
   

    //constructor 
    constructor(nombre: string, tipo:string, sonido:string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.sonido = sonido 
    }

    //metodo para hacer sonido
    public hacerSonido(): void {
        this.sonido = (`${this.nombre} dice: ${this.sonido}`)
    }

     //metodo para obtener info del gato
     public obtenerInfoAnimal(): void {
        console.log(`Nombre: ${this.nombre}, Tipo: ${this.tipo}, Sonido: ${this.sonido}`);
    }

}


//Creamos la instancia de la clase libro
const Animal1 = new Animal ("Gato", "Animal doméstico", "miau")

//llamamos al metodo obtenerInfoLibro
Animal1.obtenerInfoAnimal();
Animal1.hacerSonido();