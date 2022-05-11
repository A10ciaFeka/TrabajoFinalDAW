const reviewController = {};
const Review = require('../models/Review')
const Producto = require('../models/Producto');

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
reviewController.reviewPorUsuario = (req,res) => { 
    
    Review.reviewPorUsuario(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
};

/**
 * Obtener las reviews de un producto
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.reviewPorProducto =  (req,res) => { 
    
    Review.reviewPorProducto(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
};

/**
 * Obtener la review de un producto específico y de un usuario específico
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
 reviewController.reviewPorUsuarioYProducto = (req,res) => { 
    
    Review.reviewPorUsuarioYProducto(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
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
        mostrarResultados(err,resultado,res);
    })
}


/** --- POST REQUESTS --- */
/**
 * Crear una nueva review
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.crearReview = (req, res) => {
    Review.crearReview(req, (err,review)=>{
        mostrarResultados(err,review,res);
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
        mostrarResultados(err,resultado,res);
    })
}

/** --- DELETE REQUESTS --- */
/**
 * Eliminar una review.
 * 
 * @param {*} req
 * @param {*} res
 */
reviewController.eliminarReview = (req,res)=>{
    
    Review.eliminarReview(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

module.exports = reviewController;