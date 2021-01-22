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
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(table, cb) {
        var dbQuery = "SELECT * FROM " + table + ";";
        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMark(vals.length) + ") ";
        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var dbQuery = "UPDATE " + table + " SET " + objectToSQL(objColVals) + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
    // if any other functions need added they will be placed here
}

module.exports = orm;