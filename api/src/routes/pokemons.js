const router = require('express').Router();
const {getAllPokemons} = require("./Models/getAllPokemons");
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
        try{
            return res.status(200).send(totalPokemons);
        } catch(error){
            res.send(error)
        }
        
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const totalPokemons = await getAllPokemons();
    if(id){
        const pokemonId = await totalPokemons.filter(pokeId => pokeId.id == id);
        if(pokemonId.length){
            try{
                return res.status(200).send(pokemonId)
            } catch(error){
                res.send(error)
            }
        }
    }
})

router.post('', async (req, res)=>{
    const {
        img, name, type, id, hp, attack, defense, speed, weight, height, createdInDb
    } = req.body;
    
    try{
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
        res.send('newPokemon');
    } catch (error){
        res.send(error);
    }
    
})


router.delete('/:id', async (req, res)=>{
    try{
       const {id} = req.params;
       res.json(await Pokemon.destroy({
            where: {id} 
       }))
    } catch(error){
        res.send(error)
    }
})

module.exports = router;


