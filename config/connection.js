const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: "", // This will need to be added by the user
    database: "employee_DB" 
});

module.exports = connection;