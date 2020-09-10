var db = require('../db');
// console.log(db);
const connection = db.dbConnect;
connection.connect();
module.exports = {
  getAll: function () {
    var queryString = 'SELECT * FROM messages';
    var queryArgs = [];

    connection.query(queryString, queryArgs, function(err, results) {
      if (err) {
        console.log(err);//
      } else {
        console.log(result);//
      }
    });
  }, // a function which produces all the messages
  create: function (message) {
    var queryString = `INSERT INTO messages (txt, roomname) VALUES ('${message.txt}', '${message.roomname}')`;
  // message = '('hello', 'lobby')';
  var queryArgs = [];

    connection.query(queryString, queryArgs, function(err, results) {
      if (err) {
        console.log(err);//
      } else {
        console.log('Success!');//
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