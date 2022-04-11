const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController')

/**
 * 
 * GET ROUTES FOR REVIEWS
 * 
 */
router.get('/:id_user', reviewController.reviewByUser);
router.get('/:id_user/:id_product', reviewController.reviewByUserAndProduct);

 /**
 * 
 * POST ROUTES FOR REVIEWS
 * 
 */
router.post('/create', reviewController.createReview);


module.exports = router;