const express = require('express');
const router = express.Router();

const apiClientesRouter = require('../routes/api/clientes');
const apiEjerciciosRouter = require('../routes/api/ejercicios');
const apiProfesoresRouter = require('../routes/api/profesores');

router.use('/clientes', apiClientesRouter);
router.use('/ejercicios', apiEjerciciosRouter);
router.use('/profesores', apiProfesoresRouter);

module.exports = router;