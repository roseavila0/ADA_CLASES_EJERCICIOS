//Determinar el dia de la semana segun un numero


let diaNumero = 5;

let diaNombre; 

switch (diaNumero) {
    case 1: 
        diaNombre = "Lunes";
        break; 
    case 2: 
        diaNombre = "Martes";
        break; 
    case 3: 
        diaNombre = "Miercoles";
        break;  
    case 4: 
        diaNombre = "Jueves";
        break; 
    case 5: 
        diaNombre = "Viernes";
        break; 
    case 6: 
        diaNombre = "Sabado";
        break; 
    case 7: 
        diaNombre = "Domingo";
        break; 
    default: 
        diaNombre = "Numero invalido. Debe ser del 1 al 7";
}


console.log(diaNombre);