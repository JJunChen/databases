var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // serve up the users
      
    },
    post: function (req, res) {
      console.log('--USERNAME--', req.body.username);
      models.users.post(req.body.username, () => {
        res.end();
      });
    }
  }
};


// handles the request
// getting data from the data base

// res will have conv. methods for me



