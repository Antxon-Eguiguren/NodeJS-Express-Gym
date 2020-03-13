const express = require('express');
const router = express.Router();

const Ejercicio = require('../../models/ejercicio');

// GET http://localhost:3000/api/ejercicios
router.get('/', (req, res) => {
    Ejercicio.getAll()
        .then(rows => res.json(rows))
        .catch(err => {
            res.json({ error: 'Error al recuperar los datos de la BD' });
        });
});

// POST http://localhost:3000/api/ejercicios
router.post('/', (req, res) => {
    Ejercicio.addOne(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al crear un objeto en la BD. Debes incluir todos los campos' });
        });
});

// PUT http://localhost:3000/api/ejercicios/edit/:id
router.put('/edit/:id', (req, res) => {
    Ejercicio.editById(req.body, req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al editar los datos de la BD. Hay que editar todos los campos' });
        });
});

// DELETE http://localhost:3000/api/ejercicios/delete/:id
router.delete('/delete/:id', (req, res) => {
    Ejercicio.deleteById(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al borrar de la BD' });
        });
});

module.exports = router;