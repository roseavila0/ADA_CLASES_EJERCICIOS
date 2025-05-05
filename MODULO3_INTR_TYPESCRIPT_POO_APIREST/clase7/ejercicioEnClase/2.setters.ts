class triangle{
    private _base: number;
    private _height: number;

    constructor(){
        this._base = 0;
        this._height = 0;
    }

    //Setter para la base, con validación de números
    public set base (value: number){
        if (value > 0) {
            this._base = value;
        } else {
            console.log(`La altura debe ser mayor a 0`);
        }
    }

     // Setter para la altura, con validación de números
     public set height(value: number) {
        if (value > 0) {
            this._height = value;
        } else {
            console.log(`La altura debe ser mayor a 0`);
        }
    }

    //Metodo para calcular el area del triangulo
    public calculateArea(): number{
        return (this._base * this._height) /2;
    }
}

//Usamos la clase triangulo
const triangulo = new triangle()

//Usamos setter pra establecer nuevos valores
triangulo.base = 10
triangulo.height = 5

//Calculamos el area
console.log(`Area del triangulo: ${triangulo.calculateArea()}`);

//Probamos con numero no validos
triangulo.height = -5
triangulo.base = -10
console.log(`Area del triangulo: ${triangulo.calculateArea()}`)

