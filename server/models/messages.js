var db = require('../db');
// console.log(db);
const connection = db.dbConnect;
// connection.connect();
module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM messages';
    var queryArgs = [];

    connection.query(queryString, queryArgs, function(err, results) {
      if (err) {
        callback(err);
      } else {
        console.log('results from query: ', results);
        callback(null, results);
      }
    });
  }, // a function which produces all the messages
  create: function (message, callback) {
    var queryString = `INSERT INTO messages (txt, roomname) VALUES ("${message.txt}", "${message.roomname}")`;
    // message = '('hello', 'lobby')';
    // var queryArgs = [];

    connection.query(queryString, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, 'Success!');
      }
    }); // a function which can be used to insert a message into the database
  }
};

// var message = {txt: 'hey there', roomname: 'main'};

// const postMessage = function (message) {
//   var queryString = `INSERT INTO messages (txt, roomname) VALUES ('${message.txt}', '${message.roomname}')`;
//   // message = '('hello', 'lobby')';
//   var queryArgs = [];

//   connection.query(queryString, queryArgs, function(err, results) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Success!');
//     }
//   });
// };

// postMessage(message);