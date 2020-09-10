var db = require('../db');

const connection = db.dbConnect;
connection.connect();
module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM users';
    var queryArgs = [];

    connection.query(queryString, queryArgs, function(err, results) {
      if (err) {
        callback(err);//
      } else {
        console.log('results from query: ', results);
        callback(null, results);//
      }
    });
  },
  create: function (username, callback) {
    var queryString = `INSERT INTO users (username) VALUES ('${users.username}')`;
    // message = '('hello', 'lobby')';
    // var queryArgs = [];

    connection.query(queryString, function(err, results) {
      if (err) {
        callback(err);//
      } else {
        callback(null, 'Success!');//
      }
    }); // a function which can be used to insert a message into the database
  }
};
