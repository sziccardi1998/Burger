var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jag!ax22',
        database: "burgers_db"
    });
}

// create the connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
