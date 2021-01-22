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

const selectAll = () => {

}

const insertOne = () => {

}

const updateOne = () => {

}

