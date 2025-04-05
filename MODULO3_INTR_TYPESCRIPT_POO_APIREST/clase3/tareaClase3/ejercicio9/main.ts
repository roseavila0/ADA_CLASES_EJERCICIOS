import { Person, createPerson } from "./types";

const person: Person = createPerson( "Rose", 30 );   //: Person → Le estás diciendo a TypeScript que esta constante debe cumplir con el tipo Person.
                                                    //= createPerson("Rose", 30) → Llamas a la función y le pasas esos valores. La función te devuelve un objeto que tiene name y age, y como ya está definido que devuelve un Person
console.log(`Hola mi nombre es ${person.name} y tengo ${person.age} años.`);
