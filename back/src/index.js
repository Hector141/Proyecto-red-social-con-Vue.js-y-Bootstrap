const server = require("./app")
const PORT = 3001;
const {conn} = require("./db")

server.listen(PORT, async () => {
   console.log('Server raised in port:/reddatabase ' + PORT);
   await conn.sync({force:false})
});