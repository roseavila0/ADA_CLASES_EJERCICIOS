//definimos un objeto

class rectangle{
    private _width: number; //propiedad privada1
    private _height: number; //propiedad privada2


    constructor(width: number, height: number){
        this._width = width;
        this._height = height;
    }

    //Getter para el area del rectangulo
    public get area(): number{
        return this._width * this._height; //devuelve el area calculada
    }

    //Getter para obtener la altura
    public get height(): number{
        return this._height
    }

    //Getter para obtener el ancho del rectangulo
    public get width(): number{
        return this._width;
    }
}

//Usamos la class rectangle

const rectangulo = new rectangle(10, 5);
console.log(rectangulo)

//Accedemos a los valores usando los getters
console.log(`Ancho: ${rectangulo.width}`);
console.log(`Altura: ${rectangulo.height}`);
console.log(`Area: ${rectangulo.area}`);

/* ESTO MUESTRA CONSOLA
rectangle { _width: 10, _height: 5 }
Ancho: 10
Altura: 5
Area: 50
*/

//rectangulo.width = 20  MODIFICAR DE ESTA FORMA NO SE VA A PODER PORQUE SON PROPIEDADES PRIVADAS
