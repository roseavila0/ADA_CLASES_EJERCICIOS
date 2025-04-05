import createMultiplier from "./higherOrderFunctions";

const multiplicarPorDos = createMultiplier(2);
const resultado = multiplicarPorDos(5);

console.log("Resultado:", resultado); // Resultado: 10