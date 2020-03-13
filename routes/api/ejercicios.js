const express = require('express');
const router = express.Router();

const Ejercicio = require('../../models/ejercicio');

// GET http://localhost:3000/api/ejercicios
router.get('/', (req, res) => {
    Ejercicio.
});

module.exports = router;