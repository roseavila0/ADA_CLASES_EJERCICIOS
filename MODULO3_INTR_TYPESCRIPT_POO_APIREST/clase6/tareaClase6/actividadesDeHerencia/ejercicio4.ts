/*
Ejercicio 4: Herencia de Métodos y Sobrescritura
Consigna: Define una clase base Flor con el método describir(), que imprime un
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol,
cada una sobrescribiendo el método describir() con un mensaje específico.
*/

class Flor {
    
    describir():void {
        console.log(`Una flor para otra flor.`);
    }
}

class Rosa extends Flor {
    describir(): void {
        console.log(`Las rosas rojas son las más pedidas.`)
    }
}

class Girasol extends Flor{
    describir(): void {
        console.log(`Las girasoles brillan con el sol.`)
    }
}


const Florcita = new Flor();
Florcita.describir();

const Rosita = new Rosa();
Rosita.describir();

const Girasoles = new Girasol();
Girasoles.describir();




