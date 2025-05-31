/*
Ejercicio 5: Crear un Producto (POST)
API: Fake Store API
Descripción:
1. Usa Postman para hacer una solicitud POST a la ruta /products para crear
un nuevo producto.
2. Incluye los siguientes datos en el cuerpo de la solicitud (en formato JSON)
y envíalos:
o title: "Camiseta de Programador"
o price: 19.99
o description: "Camiseta cómoda para programadores."
o category: "Ropa"
o image: "https://fakestoreapi.com/img/1.jpg"
URL: https://fakestoreapi.com/products
Método: POST
Ejemplo de respuesta: */
//CHECA LA IMAGEEN DEL PDF

/*
Pistas:
• Asegúrate de elegir el método POST en Postman.
• Incluye los datos correctamente en el cuerpo de la solicitud, en el formato
JSON.*/



//RESPUESTA
/*
Utilicé Postman para realizar una solicitud POST a la URL https://fakestoreapi.com/products. Envié los datos del nuevo producto en formato JSON dentro del cuerpo de la solicitud (title, price, description, category, image). Al enviar, recibí una respuesta con un id, lo cual confirma que el producto fue creado exitosamente.
*/


//agregue en body - raw json 
/*
{
  "title": "Camiseta de Programador",
  "price": 19.99,
  "description": "Camiseta cómoda para programadores.",
  "category": "Ropa",
  "image": "https://fakestoreapi.com/img/1.jpg"
}
  */

//Y ME DIO DE RESPUESTA
/*
{
    "id": 21,
    "title": "Camiseta de Programador",
    "price": 19.99,
    "description": "Camiseta cómoda para programadores.",
    "image": "https://fakestoreapi.com/img/1.jpg",
    "category": "Ropa"
}

*/

