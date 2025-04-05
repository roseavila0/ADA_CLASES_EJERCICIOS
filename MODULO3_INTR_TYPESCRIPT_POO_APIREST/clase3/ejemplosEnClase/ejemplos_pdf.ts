// extension
type Persona = { nombre: string; edad: number };
type Empleado = Persona & { salario: number }; // Se extiende con &

const trabajador: Empleado = { nombre: "Ana", edad: 30, salario: 2000 };


type Datos = [string, number];
type DatosExtra = [...Datos, boolean]; // Se puede usar spread, pero no `&`

const info: DatosExtra = ["Ana", 30, true]; // Funciona

// tipos
type Respuesta = "sí" | "no" | "tal vez"; // Unión de tipos

let decision: Respuesta;
decision = "sí";  // ✅ Válido
decision = "no";  // ✅ Válido
//
// decision = "quizás";  // ❌ Error, no es parte del tipo

let usuario: [string, number] = ["Ana", 30];

usuario[0] = "Luis";  // ✅ Válido
usuario[1] = 25;  // ✅ Válido
usuario.push("extra");  // 🚨 Aunque TypeScript lo permite, el diseño original se rompe
