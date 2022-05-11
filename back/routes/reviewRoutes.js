const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController')

/**
 * 
 * PETICIONES GET PARA REVIEWS
 * 
 */
router.get('/producto/:id_producto/:num_reviews?/:offset?', reviewController.reviewPorProducto);
router.get('/usuario/:id_usuario', reviewController.reviewPorUsuario);
router.get('/usu_prod/:id_usuario/:id_producto', reviewController.reviewPorUsuarioYProducto);
router.get('/recientes', reviewController.getUltimasReviews);

 /**
 * 
 * PETICIONES POST PARA REVIEWS
 * 
 */
router.post('/crear', reviewController.crearReview);

/**
 * 
 * PETICIONES PUT PARA REVIEWS
 * 
 */
router.put('/:id_review/editar', reviewController.editarReview);

/**
 * 
 * PETICIONES DELETE PARA REVIEWS
 * 
 */
router.delete('/eliminar', reviewController.eliminarReview);

module.exports = router;