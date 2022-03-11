const router = require('express').Router();
const {getAllPokemons} = require("./models/getAllPokemons");
const { Pokemon, Type } = require("../db");


router.get('', async (req, res)=>{
    const {name} = req.query; 
    const totalPokemons = await getAllPokemons();
    if (name){
        const pokemonName = totalPokemons.filter(ele=>ele.name.toLowerCase().includes(name.toLowerCase()))
        if(pokemonName.length){
            return res.status(200).send(pokemonName);
        } return res.send({error: 'Pokemon not found'})
    } else {
        return res.status(200).send(totalPokemons);
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const totalPokemons = await getAllPokemons();
    if(id){
        const pokemonId = await totalPokemons.filter(pokeId => pokeId.id == id);
        if(pokemonId.length){
           return res.status(200).send(pokemonId) // siempre 1 tiene que haber, mínimamente en todos los anteriores al último
        } res.status(404).send('Pokemon not found please try again')
    }
})

router.post('', async (req, res)=>{
    const {
        img, name, type, id, hp, attack, defense, speed, weight, height, createdInDb
    } = req.body;
    
    const newPokemon = await Pokemon.create({
        img, name, id, hp, attack, defense, speed, weight, height, createdInDb
    });

    const typeDb = await Type.findAll({
        where: {
            name: type
        }
    });
    console.log(typeDb)
    await newPokemon.addType(typeDb);
    res.send('newPokemon')
})

module.exports = router;


