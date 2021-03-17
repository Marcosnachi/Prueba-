const express = require ('express');
const router = express.Router();

const heroesController = require('../controllers/heroesControllers')

router.get('/', heroesController.listaPersonalidades);



module.exports = router;