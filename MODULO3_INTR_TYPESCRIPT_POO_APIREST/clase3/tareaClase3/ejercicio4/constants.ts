/*
Actividad 4: Tipos de Exportaciones
Crea un archivo llamado constants.ts que contenga:
• Una constante PI con el valor de π.
• Una constante E con el valor de e.
Exporta ambas constantes usando:
• Exportación directa.
• Exportación separada.
Luego, en main.ts, importa ambas constantes y muestra sus valores en la
consola.

*/
//Exportación directa.

export const PI: number = 3.14159
export const E: number=  2.71828


//Exportación separada.

const valorPI: number = 3.14159
const valorE: number=  2.71828

export{valorPI, valorE };

