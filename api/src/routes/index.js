const { Router } = require('express');
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemons = require ('./pokemons');
const type = require ('./types');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemons)
router.use('/types', type)


module.exports = router;
