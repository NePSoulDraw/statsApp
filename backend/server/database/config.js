const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.CNN_MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log("Base de datos conectada");

    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
    }


}

module.exports = dbConnection;