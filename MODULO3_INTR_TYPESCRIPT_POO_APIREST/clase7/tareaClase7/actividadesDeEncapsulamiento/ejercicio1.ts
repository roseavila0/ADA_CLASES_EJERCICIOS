/*
1. Ejercicio de Coche
Diseña una clase Coche que represente un vehículo. Esta clase debe tener
propiedades privadas para marca, modelo, año, y kilometraje. Implementa
métodos para encender el coche y realizar un viaje, que incrementen el
kilometraje. Asegúrate de que el año no sea menor que 1886 (el año en que se
inventó el coche) y que el kilometraje no pueda ser negativo. Si se intenta
establecer un año o kilometraje no válido, imprime un mensaje indicando el
error
*/

class Coche {
    private _marca: string;
    private _modelo: string;
    private _anio: number;
    private _kilometraje: number;

    constructor(marca: string, modelo:string, anio:number, kilometraje:number){
        this._marca= marca;
        this._modelo= modelo;
        this._anio= anio;
        this._kilometraje= kilometraje;
    }

    public set anio (value: number){
        if(value >= 1886){
            this.anio= this.anio;
        }else{
            console.log("Este anio no esta permitido.")
        }
    }

    public set kilometraje (value: number){
        if(value > 0){
            this._kilometraje += _kilometraje;
        } else{
            console.log("El kilometraje no es valido, tiene que ser mayor a 0.")
        }
    }
    

    encender():void{
        console.log( `El vehículo esta encendido.` )
    }


    viajeDestino(): void{
        console.log(``)
    };
 }

 const carro = new Coche("Honda", "Civic", 2020, 38.0000)
 carro.encender();
 carro.viajeDestino();
 

