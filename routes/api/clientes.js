const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Cliente = require('../../models/cliente');

// GET http://localhost:3000/api/clientes
router.get('/', (req, res) => {
    Cliente.getAll()
        .then(rows => res.json(rows))
        .catch(err => {
            res.json({ error: 'Error al recuperar los datos de la BD' });
        });
});

// POST http://localhost:3000/api/clientes/
router.post('/', [
    check('nombre').notEmpty().withMessage('El campo Nombre es obligatorio'),
    check('apellidos').notEmpty().withMessage('El campo Apellidos es obligatorio'),
    check('direccion').notEmpty().withMessage('El campo Dirección es obligatorio'),
    check('email').notEmpty().withMessage('El campo Email es obligatorio'),
    check('edad').notEmpty().withMessage('El campo Edad es obligatorio'),
    check('sexo').notEmpty().withMessage('El campo Sexo es obligatorio'),
    check('cuota').notEmpty().withMessage('El campo Cuota es obligatorio'),
    check('fecha_nacimiento').notEmpty().withMessage('El campo Fecha de Nacimiento es obligatorio'),
    check('fk_profesor').notEmpty().withMessage('El campo Profesor es obligatorio'),
    check('dni').notEmpty().withMessage('El campo DNI es obligatorio')
        .custom(value => {
            return (/^\d{8}[a-zA-Z]$/).test(value)
        }).withMessage('El DNI tiene que ser válido')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json(errors.array());
    }
    else {
        Cliente.add(req.body)
            .then(result => res.json(result))
    }
});

// PUT http://localhost:3000/api/clientes/edit/:id
router.put('/edit/:id', (req, res) => {
    Cliente.editById(req.body, req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            console.log(err);
            res.json({ error: 'Error al editar los datos de la BD' });
        });
});

// DELETE http://localhost:3000/api/clientes/delete/:id
router.delete('/delete/:id', (req, res) => {
    Cliente.deleteById(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al borrar de la BD' });
        });
});

module.exports = router;