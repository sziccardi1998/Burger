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


const selectAll = () => {

}

const insertOne = () => {

}

const updateOne = () => {

}

