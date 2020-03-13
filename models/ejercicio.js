const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM ejercicios', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
};

const addOne = ({ titulo, duracion, repeticiones }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO ejercicios (titulo, duracion, repeticiones) VALUES (?, ?, ?)', [titulo, duracion, repeticiones], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const editById = ({ titulo, duracion, repeticiones }, ejercicioId) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE ejercicios SET titulo = ?, duracion = ?, repeticiones = ? WHERE id = ?', [titulo, duracion, repeticiones, ejercicioId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
};

const deleteById = (ejercicioId) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM ejercicios WHERE id = ?', [ejercicioId], (err, result) => {
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