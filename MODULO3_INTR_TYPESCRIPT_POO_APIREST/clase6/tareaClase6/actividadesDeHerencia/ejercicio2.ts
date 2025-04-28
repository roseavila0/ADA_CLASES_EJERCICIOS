/*
Ejercicio 2: Herencia Simple con Acceso
Consigna: Crea una clase base Maestro con propiedades protegidas nombre y
materia, y un método enseñar(). Luego, crea una clase derivada
MaestroMatematicas que extienda de Maestro y sobrescriba el método
enseñar() para imprimir un mensaje específico de matemáticas.
*/

class Maestro {
    protected nombre: string;
    protected materia: string;

    constructor(nombre:string, materia:string){
        this.nombre = nombre;
        this.materia = materia; 
    }

    public enseñar():void {
        console.log(`El maestro ${this.nombre} enseña la materia ${this.materia}.`)
    }   
}

class MaestroMatematicas extends Maestro {

    constructor(nombre:string){
        super(nombre, "Matemáticas")
    }

    public enseñar(): void {
        console.log(`El maestro ${this.nombre} enseña matemáticas.`)
    }
}

const elMaestro= new MaestroMatematicas("Leopoldo");
elMaestro.enseñar();