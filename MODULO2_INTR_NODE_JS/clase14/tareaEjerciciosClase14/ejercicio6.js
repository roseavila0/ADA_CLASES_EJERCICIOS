/*
DESAFIO Ejercicio 6: Hash de Contraseña con Sal
Crea un script en Node.js que permita al usuario ingresar una contraseña
y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego,
genera un hash de la contraseña combinada con el "sal" usando el
algoritmo SHA-256. Muestra el hash generado.
*/


/* OJO!!!!!!
Un salt (sal) es un valor aleatorio que se agrega a la entrada de un algoritmo de cifrado o hash para asegurar que los mismos datos no generen el mismo resultado cada vez. Es una técnica utilizada para fortalecer la seguridad y evitar ataques de diccionario o de tablas arco iris (rainbow tables).

¿Por qué usar un salt?
Previene la reutilización de hashes o cifrados: Sin un salt, si dos usuarios usan la misma contraseña, su hash o cifrado sería el mismo, lo que facilita los ataques.
Añade aleatoriedad: El salt asegura que, incluso si dos usuarios tienen la misma entrada (por ejemplo, la misma contraseña), el hash o cifrado resultante será diferente debido al salt único.
Fortalece la seguridad en almacenamiento de contraseñas: Cuando guardas contraseñas de forma segura, se suele usar un salt para que las contraseñas iguales no generen el mismo hash. */

const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu contraseña: ', (contraseña) => {
  
  // Solicitar al usuario que ingrese el "sal"
  rl.question('Ingresa un "sal" (valor aleatorio): ', (sal) => {
    
    // Combinar la contraseña con el "sal"
    const contrasenaConSal = contraseña + sal;

    // Crear el hash usando SHA-256
    const hash = crypto.createHash('sha256');
    hash.update(contrasenaConSal);
    const hashFinal = hash.digest('hex');

    // Mostrar el hash generado
    console.log('Hash generado (SHA-256):', hashFinal);

    rl.close();
  });
});