const express = require('express');
const router = express.Router();

const Profesor = require('../../models/profesor');

// GET http://localhost:3000/api/profesores
router.get('/', (req, res) => {
    Profesor.getAll()
        .then(rows => res.json(rows))
        .catch(err => {
            res.json({ error: 'Error al recuperar los datos de la BD' })
        });
});

// POST http://localhost:3000/api/profesores
router.post('/', (req, res) => {
    Profesor.addOne(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al crear un objeto en la BD. Debes incluir todos los campos' });
        });
});

// PUT http://localhost:3000/api/profesores/edit/:id
router.put('/edit/:id', (req, res) => {
    Profesor.editById(req.body, req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al editar los datos de la BD. Hay que editar todos los campos' });
        });
});

// DELETE http://localhost:3000/api/profesores/delete/:id
router.delete('/delete/:id', (req, res) => {
    Profesor.deleteById(req.params.id)
        .then(result => res.json(result))
        .catch(err => {
            res.json({ error: 'Error al borrar de la BD' });
        });
});

module.exports = router;