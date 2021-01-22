// import orm when it is ready
var ORM = require("../config/orm");

let burger = {
    selectAll: function(cb) {
        ORM.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        ORM.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        ORM.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // if additional orm functions are added they will be updated here
}



// export at the end of the file
