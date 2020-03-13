const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM clientes', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

const addOne = ({ nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni, fk_profesor }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO clientes (nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni, fk_profesor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, apellidos, direccion, email, edad, sexo, new Date(), cuota, fecha_nacimiento, dni, fk_profesor], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const editById = ({ nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni, fk_profesor }, clienteId) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE clientes SET nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo = ?, fecha_inscripcion = ?, cuota = ?, fecha_nacimiento = ?, dni = ?, fk_profesor = ? WHERE id = ?', [nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni, fk_profesor, clienteId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const deleteById = (clienteId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM clientes WHERE id = ?', [clienteId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

module.exports = {
    getAll: getAll,
    addOne: addOne,
    editById: editById,
    deleteById: deleteById
}