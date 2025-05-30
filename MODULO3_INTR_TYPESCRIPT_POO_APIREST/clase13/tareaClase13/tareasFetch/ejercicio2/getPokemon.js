/*
Ejercicio 2: Obtener Información de un Pokémon Específico
Descripción:
1. Crea un archivo getPokemon.js.
2. Usando fetch, realiza una solicitud a la API de PokeAPI para obtener
información sobre el Pokémon "Bulbasaur".
3. Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la
consola.
Pistas:
• La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1.
• Los tipos de Pokémon se encuentran en types dentro de la respuesta. 
*/

/* Llama a la función fetch con la URL que apunta a los datos del Pokémon con ID 1, que es Bulbasaur.
fetch() realiza una solicitud HTTP GET a esa URL. */
fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(response =>{ 
    console.log("Respuesta recibida: ", response.status)
    return response.json();
})

/*then() se encadena a fetch y se ejecuta cuando la respuesta llega del servidor.

response.status: Imprime en consola el código de estado HTTP (por ejemplo, 200 para "OK").

response.json(): Convierte la respuesta HTTP (que es un "stream") a un objeto JavaScript con los datos JSON de Bulbasaur. Este paso es asíncrono y devuelve otra promesa.

*/


/*
Una vez convertido el JSON, esta función accede a la respuesta completa y extrae el nombre del Pokémon con data.name, que en este caso será "bulbasaur".

*/


.then (data => {
    const pokemonName = data.name

    const pokemonTypes = data.types.map(typeInfo => typeInfo.type.name);
    console.log("Pokemon: ", pokemonName, "Tipos:", pokemonTypes.join(', '))
})

/*
Esta línea accede a una propiedad del objeto data llamada types, que es un array.
.map(...) recorre cada objeto del array.

typeInfo es el nombre que le damos temporalmente a cada objeto dentro del array types.

Dentro de cada typeInfo, hay un objeto type, y dentro de ese, está la propiedad name, que contiene el nombre del tipo (como "grass" o "poison").*/






//Imprime en consola el nombre del Pokémon y sus tipos, usando join(', ') para unir los tipos con comas.

.catch(error => {
    console.error("Error al obtener los datos", error);
})

/*
Este bloque .catch() captura cualquier error que ocurra en el proceso (por ejemplo, si no hay internet o si la API no responde) y muestra un mensaje de error en consola.*/




/*RESOLUCION DE LA PROFE

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json()) // Convertir a JSON
    .then(data => {
        // Extraer el nombre
        const name = data.name;

        // Extraer los tipos
        const types = data.types.map(typeInfo => typeInfo.type.name);

        // Mostrar los resultados
        console.log(`Nombre: ${name}`);
        console.log(`Tipos: ${types.join(', ')}`);
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al obtener los datos:', error);
    });


    */
   