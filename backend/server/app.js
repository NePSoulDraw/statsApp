
/*

- Crear controladores character para cada ruta

- Validaciones express-validator y crear validacionesdb si hace falta

*/

require('dotenv').config();
const Server = require('./models/server');

const server = new Server();

server.listen();