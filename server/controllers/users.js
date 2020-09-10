var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data)=> {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.json(data);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.statusCode = 201;
        res.end('Success!');
      }
    });
  } // a function which handles posting a message to the database
};
