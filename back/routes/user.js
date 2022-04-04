const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/userController');



router.get('/list', usuarioController.listar);

module.exports = router;