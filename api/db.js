

const mysql = require('mysql2');

export const db = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root', 
    password: '3577', 
    database: 'blog',
});