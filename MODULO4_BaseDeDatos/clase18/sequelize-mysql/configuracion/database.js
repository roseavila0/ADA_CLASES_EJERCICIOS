const {Sequelize} = require ("sequelize"); 


const sequelize = new Sequelize ("test_db", "node_rose", "node_pass", {
    host:  "127.0.0.1", 
    dialect: "mysql",
    port: 3307
  }
); 

/*
const sequelize = new Sequelize("test_db", "node_rose", "node_pass", {
  host: "127.0.0.1",   // 
  dialect: "mysql",
  port: 3307
});
*/

sequelize.authenticate()
.then(()=> console.log("Conexion exitosa a la base de datos"))
.catch((error)=>console.error("Error al conectar:", error)); 

module.exports = sequelize; 