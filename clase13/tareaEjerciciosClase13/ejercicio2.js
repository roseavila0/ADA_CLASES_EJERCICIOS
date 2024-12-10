//Número mayor (función expresada) Crea una función expresada
//llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor. //< > 

const encontrarMayor = function (num1, num2){
    if (num1>num2){
        return `El número mayor es: ${num1}`;
    } else if (num2 > num1){
        return `El número mayor es: ${num2}`;
    }else{
        return 'Ambos números son iguales';
    }
};

console.log( encontrarMayor (8, 5));  
console.log( encontrarMayor (25, 65));  
console.log( encontrarMayor (32, 32));  
