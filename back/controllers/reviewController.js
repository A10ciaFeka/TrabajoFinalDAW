const reviewController = {};
const Review = require('../models/Review')

mostrarResultados = (err,resultado,res)=>{
    if(err){  
        res.json(err);
    }else{
        res.json(resultado);
    }
}   

/** --- GET REQUESTS --- */
/**
 * Obtener las reviews de un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
reviewController.reviewByUsuario = (req,res) => { 
    
    Review.reviewPorUsuario(req,(err,resultado)=>{
        this.mostrarResultados(err,resultado,res);
    });
};


/**
 * Obtener la review de un producto específico y de un usuario específico
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
 reviewController.reviewByUsuarioAndProducto = (req,res) => { 
    
    Review.reviewPorUsuarioYProducto(req, (err,resultado)=>{
        this.mostrarResultados(err,resultado,res);
    });
};

/**
 * Obtener las últimas reviews según número a indicar por el cuerpo de la petición.
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.getUltimasReviews = (req,res) => {
   
    Review.getUltimasReviews(req, (err,resultado)=>{
        this.mostrarResultados(err,resultado,res);
    })
}


/** --- POST REQUESTS --- */
/**
 * Crear una nueva review
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.createReview = (req, res) => {
   
    Review.crearReview(req, (err,resultado)=>{
        this.mostrarResultados(err,resultado,res);
    })
}


/** --- PUT REQUESTS --- */
/**
 * Actualizar los datos de una review.
 * 
 * @param {*} req 
 * @param {*} res 
 */
 reviewController.editarReview = (req,res) => {
   
    Review.editarReview(req, (err,resultado)=>{
        this.mostrarResultados(err,resultado,res);
    })
}

module.exports = reviewController;