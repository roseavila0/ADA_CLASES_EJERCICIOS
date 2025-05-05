/*
5. Ejercicio de Vacaciones
Desarrolla una clase Vacacion que tenga propiedades privadas para destino,
duracion (en días) y presupuesto. Implementa getters y setters, asegurándote de
que duracion no sea menor que 1 y presupuesto sea mayor que 0.
*/


class Vacacion {
    private _destino!: string;
    private _duracion!: number;
    private _presupuesto!: number;

constructor(destino:string, duracion:number, presupuesto:number){
    this.destino = destino;
    this.duracion = duracion;
    this.presupuesto = presupuesto;
    }


public get destino(): string{
    return this._destino;
    }

public set destino(value: string){
    this._destino = value;
    }

public get duracion(): number{
    return this._duracion;
    }

public set duracion (value: number){
    if (value <= 0) throw new Error ("No valido, el mínimo tiempo de estancia es 1 día.");
    this._duracion= value;
    }

public get presupuesto(): number{
    return this._presupuesto;
    }

public set presupuesto (value: number){
    if (value <= 0) {
        throw new Error("No válido, el presupuesto debe ser mayor que cero.");
    }
    this._presupuesto = value;
    }

}

const cliente = new Vacacion("Quebec", 6, 8000)
console.log(`El destino elegido es: ${cliente.destino}.`);
console.log(`La duración del viaje es: ${cliente.duracion} días.`);
console.log(`El presupuesto del viaje es: $ ${cliente.presupuesto}.`);
//prueba de errores

