const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');


/**
 * 
 * GET ROUTES FOR USERS
 * 
 */
router.get('/list', userController.listUsers);
router.get('/:id_user', userController.getUserById);

/**
 * 
 * POST ROUTES FOR USERS
 * 
 */
router.post('/create', userController.createUser);


module.exports = router;