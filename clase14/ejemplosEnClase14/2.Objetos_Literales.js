//Definimos un objeto literal
const auto = {
    //Propiedades normales
    marca : 'toyota',
    modelo : 'Corolla',
    anio : 2022,
    color : 'negro',

    //Metodo
    describir : function(){
        return `Este auto es un ${this.marca} ${this.modelo} del anio ${this.anio} y de color ${this.color}`
    }
}
    //Ejecución del metodo
console.log(auto.describir())

    //Acceder a las propiedades una por una
    console.log(auo.marca);
    console.log(auo.modelo);
    console.log(auo.anio);
    console.log(auo.color);






/*
//Esctructura del objeto
nombreObjeto ={
    propiedad1 : valor1, 
    propiedad1 : valor2, 
    propiedad1 : valor3, 
    nombreMetodo: function (){
    return logica
}
}
*/