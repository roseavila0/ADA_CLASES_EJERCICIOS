//Ejercicios de Objetos:
//•Ejercicio 6: El deportista

//Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia.
//Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
//La función entrenarHoras tiene las siguientes tres características:
//✓Recibe por parámetro la cantidad de horas.
//✓Resta a su energía (this.energia) la cantidad de horas x 5.
//✓Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

let deportista = {
    nombre: 'Matteo',
    energia: 100,
    experiencia: 5,
    entrenarHoras: function (horas){           //  RECORDATORIO: Por cada hora de entrenamiento, el deportista pierde 5⋅horas de energía.
      this.energia -= horas * 5;               //  Por cada hora de entrenamiento, el deportista gana 2⋅horas de experiencia.
      this.experiencia += horas * 2;
      console.log (`Después de entrenr: la energía del deportista es = ${this.energia}, la experiencia ${this.experiencia}`);
     }
};

deportista.entrenarHoras(3);
deportista.entrenarHoras(5);     //Después de cada llamada a entrenarHoras, se muestran los valores actualizados de energia y experiencia.
deportista.entrenarHoras(2);
deportista.entrenarHoras(1);