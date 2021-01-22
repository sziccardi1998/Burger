// bring in mysql connection
var connection = require('./connection');

// create a helper function that makes sql syntax easier
function printQuestionMark(num) {
    let holder = [];
    for (let i = 0; i < num; i++) {
        holder.push("?");
    }
    return holder.toString();
}

// create a helper function that converts key/value pairs
function objectToSQL(ob) {
    let arr = [];
    for (var key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

let orm = {
    selectAll: function(table, cb) {
        let dbQuery = "SELECT * FROM " + table + ";";
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMark(vals.length) + ") ";
        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let dbQuery = "UPDATE " + table + " SET " + objectToSQL(objColVals) + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    delete: function(table, condition, cb) {
        let dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
    // if any other functions need added they will be placed here
};

module.exports = orm;