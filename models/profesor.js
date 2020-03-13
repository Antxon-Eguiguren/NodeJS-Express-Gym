const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM profesores', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const addOne = ({ nombre, experiencia }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO profesores (nombre, experiencia) VALUES (?, ?)', [nombre, experiencia], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const editById = ({ nombre, experiencia }, profesorId) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE profesores SET nombre = ?, experiencia = ? WHERE id = ?', [nombre, experiencia, profesorId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const deleteById = (profesorId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM profesores WHERE id = ?', [profesorId], (err, result) => {
            if (err) reject(err);
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