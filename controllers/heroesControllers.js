const { lista } = require('../data/heros');
const personas = require('../data/heros');


const heroesController = {

    listaPersonalidades: function(req, res){
    return res.send(personas.lista)
    },

    listaPersonalidades: function(req, res){
        return res.send( "Hola, mi nombre es " + lista.nombre + "y soy " + lista.profesion )
        },







    id : function(req, res){
        let resultados = [];
            for(let i=0; i < personas.lista.length; i++){
                if(req.params.marca == personas.lista[i].marca){
                    resultados.push(personas.lista[i])
                }
            } //Ya tendriamos los resultdos en el array
    
            if(resultados.length == 0){
                resultados = `Por el momento no hay autos de la marca: ${req.params.marca}`
            }
    
            return res.send(resultados);
        },


}



    module.exports = heroesController;

