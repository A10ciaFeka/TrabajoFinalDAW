const express = require('express');
const router = express.Router();


/**
 * 
 * GET ROUTES FOR REVIEWS
 * 
 */
router.get('/:id_user', reviewController.reviewByUser);
router.get('/:id_user&id_product', reviewController.reviewByUser);

 /**
 * 
 * POST ROUTES FOR REVIEWS
 * 
 */
router.post('/create', reviewController.createReview);


module.exports = router;