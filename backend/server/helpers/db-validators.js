const Character = require("../models/character")


const existeCharacterPorId = async( id ) => {

    const existeCharacter = Character.findById( id );

    if ( !existeCharacter ){
        throw new Error(`El id no existe: ${ id }`);
    }

}

module.exports = existeCharacterPorId;