/*
Ejercicio 1: Consultar Información de una API Pública

Descripción:
1. Crea un archivo index.js.
2. Usando el método fetch en Node.js, realiza una solicitud a la API de Rick
and Morty.
3. Extrae el nombre del primer personaje de la respuesta y muéstralo en la
consola.
Pistas:
• Usa fetch(url) para hacer la solicitud y .then(response => response.json())
para procesar el JSON.
• Accede a results[0].name para obtener el nombre del primer personaje. 
*/


//Llama al endpoint /character, que trae una lista de personajes
fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        console.log('Respuesta recibida:', response.status);
        return response.json();
    })

//Toma el primero de la lista con data.results[0]
    .then(data => {
        const firstCharacter = data.results[0];
        console.log('Primer personaje:', firstCharacter.name);
    })

//Muestra su nombre   
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });









//SEGUNDA RESOLUCIÓN
/*
async function fetchCharacter(id){
    try{
        if(!id) throw new Error ("No ingresaste el ID");

        const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`)
        
        if (!response.ok) throw new Error(`El personaje no fue encontrado: ${response.status}`)
       
        const character =  await response.json()

        console.log(`Nombre del personaje: ${character.name}`)
        } catch (error) {
            console.error('Error: ', error.message)
        }
    }

    fetchCharacter(4)

    */
