const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController')

/**
 * 
 * PETICIONES GET PARA REVIEWS
 * 
 */
router.get('/:id_usuario', reviewController.reviewPorUsuario);
router.get('/:id_usuario/:id_producto', reviewController.reviewPorUsuarioYProducto);
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

module.exports = router;