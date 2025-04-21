/*
Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y
Aserciones

Crea una función genérica llamada filtrarElementos que reciba un arreglo de
valores mixtos (por ejemplo, number | string | boolean). Usando un bucle for...of,
filtra solo los valores que sean cadenas de texto (string). Utiliza aserciones de
tipo para acceder a las propiedades específicas de string.
*/

function filtrarElementos<T>(arreglo: T[]): string[] {
    const resultados: string[] = [];                                    //Aquí se prepara un array vacío donde se guardarán solo los string, ya convertidos a mayúsculas.
    
    for (const elemento of arreglo) {                                     //Este for...of recorre cada elemento del arreglo.
      if (typeof elemento === 'string') {
        resultados.push((elemento as string).toUpperCase());
      }
    }
    
    return resultados;
  }
  
  // Ejemplo de uso:
  const valoresMixtos: (number | string | boolean)[] = [123, "hola", true, "typescript", false];
  const filtrados = filtrarElementos(valoresMixtos);
  console.log(filtrados); // ["HOLA", "TYPESCRIPT"]

