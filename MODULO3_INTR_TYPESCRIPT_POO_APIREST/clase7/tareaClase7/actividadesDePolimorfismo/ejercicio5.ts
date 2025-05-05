/*
Ejercicio 5: Uso de Interfaces para Polimorfismo
Crea una interfaz Empleado con un método trabajar. Implementa esta interfaz
en clases Programador y Disenador, donde cada clase debe implementar el
método con su propia lógica. Luego, crea una función que reciba un objeto de
tipo Empleado y llame a su método trabajar.
*/

interface empleado {
    trabajar():void;

}

class Programador implements empleado{
    trabajar():void{
        console.log(`El programador en su trabajo usa más la parte lógica.`);
    };
}

class Disenador implements empleado{
    trabajar():void{
        console.log(`El diseñador en su trabajo usa más la parte creativa.`);
    };
}

function caracteristicasDeEmpleados (cargoLaboral: empleado) {
    cargoLaboral.trabajar();
}

const empleadoProgramador = new Programador();
const empleadoDisenador =  new Disenador();

caracteristicasDeEmpleados(empleadoProgramador);
caracteristicasDeEmpleados(empleadoDisenador);




