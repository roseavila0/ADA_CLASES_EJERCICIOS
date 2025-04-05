/*
Actividad 6: Uso de Namespaces
Crea un namespace llamado Geometry en un archivo geometry.ts que contenga
las siguientes funciones:
• areaOfCircle(radius: number): number: devuelve el área de un círculo.
• areaOfSquare(side: number): number: devuelve el área de un cuadrado.
Exporta ambas funciones. En main.ts, utiliza el namespace Geometry para llamar
a las funciones y muestra los resultados en la consola.
*/


//  ¿Qué es un namespace?
/*
Un namespace (espacio de nombres) en TypeScript es una forma de organizar tu código agrupando funciones, variables, clases o interfaces que están relacionadas.

Sirve para evitar conflictos de nombres y tener todo más ordenado, especialmente en proyectos grandes o cuando no estás usando módulos.

📦 Es como meter varias funciones dentro de una misma "caja" con nombre. Para acceder a lo que está dentro, usas esa caja como prefijo.
*/


// Declaramos el namespace
export namespace Geometry {
  
    export function areaOfCircle(radius: number): number {
      return Math.PI * radius * radius;
    }
  
    export function areaOfSquare(side: number): number {
      return side * side;
    }
  
  }

  //usamos export tanto para el namespace como para las funciones internas si queremos usarlas desde otro archivo.

  //RECORDATORIO
  /*
  ¿Cuándo usar namespaces?
Cuando no usas módulos, y quieres organizar el código.

Cuando estás trabajando en un solo archivo grande.

No es tan común en proyectos modernos con módulos (ESM o CommonJS), pero igual es válido y didáctico.
*/