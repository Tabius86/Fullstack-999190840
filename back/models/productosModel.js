var pool = require('./bd');

async function getProductos() {
    try {
        var query = 'select * from productos';
        var rows = await pool.query(query);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getProducto(cod) {
    try {
        var query = 'select * from productos where codigo = ?';
        var rows = await pool.query(query, [cod]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

async function insertProductos(obj) {
    try {
        var query = 'insert into productos set ?';
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProductos(codigo) {
    try {
        var query = 'delete from productos where codigo = ?';
        var rows = await pool.query(query, [codigo]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateProductos(id, obj) {
    try {
        var query = 'update productos set ? where codigo = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getProductos, getProducto, insertProductos, deleteProductos, updateProductos}