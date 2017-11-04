var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('--controllersMessage--', req.body.message);
      models.messages.post(req.body.message, () => {
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // serve up the users
      
    },
    post: function (req, res) {
      console.log('--controllersUsername--', req.body.username);
      models.users.post(req.body.username, () => {
        res.end();
      });
    }
  }
};


// handles the request
// getting data from the data base

// res will have conv. methods for me



