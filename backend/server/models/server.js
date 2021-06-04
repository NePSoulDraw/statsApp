const express = require('express');
const cors = require('cors');
const dbConnection = require('../database/config');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            characters: '/api/characters'
        }

        this.connectDB();

        this.middlewares();

        this.routes();


    }

    middlewares(){

        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static( 'public' ) );
        

    }

    routes(){

        this.app.use( this.paths.characters, require('../routes/characters'));

    }

    listen(){

        this.app.listen(this.port, () => {

            console.log('Servidor iniciado en el puerto', this.port);

        });

    }

    async connectDB(){

        await dbConnection();

    }

}

module.exports = Server;
