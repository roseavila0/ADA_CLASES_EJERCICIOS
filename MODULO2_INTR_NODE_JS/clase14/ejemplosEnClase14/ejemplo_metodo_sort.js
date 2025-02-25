//El método sort() modifica el array original y devuelve el array ordenado.

const people = [
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Alice", age: 22}
];

//Ordenar por edad en orden ascendeente
people.sort ((a, b) => a.age - b.age);
console.log(people);

