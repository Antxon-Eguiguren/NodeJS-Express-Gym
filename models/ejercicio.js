const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM ejercicios', (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}