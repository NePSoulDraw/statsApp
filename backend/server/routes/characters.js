const { Router, response } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const existeCharacterPorId = require('../helpers/db-validators');
const { postCharacter,
        getCharacter,
        getCharacters,
        updateCharacter,
        deleteCharacter } = require('../controllers/characters');

const router = Router();

// GET paginado

router.get('/', getCharacters);

// GET por id

router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeCharacterPorId),
    validarCampos
], getCharacter);

// POST

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos,
], postCharacter);

// PUT

router.put('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCharacterPorId),
    validarCampos
], updateCharacter);

// DELETE

router.delete('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom(existeCharacterPorId),
    validarCampos
], deleteCharacter);


module.exports = router;
