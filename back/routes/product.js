const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/**
 * 
 * GET PRODUCTS
 * 
 */
router.get('/list', productController.allProducts);
router.get('/:prod_name', productController.productByName);

/**
 * 
 * POST PRODUCTS
 * 
 */
router.post('/createProduct', productController.createProduct);

/**
 * 
 * UPDATE PRODUCTS
 * 
 */
router.post('updateProduct', productController.updateProduct);
