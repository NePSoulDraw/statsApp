const { response } = require("express");
const Character = require("../models/character");

const getCharacters = async(req, res = response) => {

    const total = await Character.countDocuments();
    const characters = await Character.find();

    res.status(200).json({
        total,
        characters
    });

}

const getCharacter = async(req, res = response) => {

    const character_id = req.params.id;

    const character = await Character.findById(character_id);

    if ( !character ){
        return res.status(400).json({
            msg: 'El personaje no existe'
        });
    }

    res.status(200).json({
        character
    });


}

const postCharacter = async(req, res = response) => {

    const { nombre, fuerza, destreza, agilidad, defensa, suerte } = req.body;

    const character = new Character({ nombre, fuerza, destreza, agilidad, defensa, suerte });

    await character.save();

    res.status(200).json({
        character
    });

}

const updateCharacter = async(req, res = response) => {

    const character_id = req.params.id;

    const data = req.body;

    const characterExiste = await Character.findById( character_id );

    if ( !characterExiste ){
        return res.status(400).json({
            msg: 'El personaje no existe, no se ha podido actualizar'
        });
    }

    const character = await Character.findByIdAndUpdate(character_id, data, {new: true});

    res.status(200).json({
        character
    });

}

const deleteCharacter = async(req, res = response) => {

    const character_id = req.params.id;

    const characterExiste = await Character.findById( character_id );

    if ( !characterExiste ){
        return res.status(400).json({
            msg: 'El personaje no existe, no se ha podido eliminar'
        });
    }

    await Character.findByIdAndRemove(character_id);

    res.status(200).json({
        msg: "Personaje eliminado correctamente"
    });

}


module.exports = {
    postCharacter,
    getCharacter,
    getCharacters,
    updateCharacter,
    deleteCharacter
}