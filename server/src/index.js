const server = require("./server");
const database = require("./database");

server.listen(server.get("port"), ()=>{
    console.log("Server en el puerto", server.get("port"));
});