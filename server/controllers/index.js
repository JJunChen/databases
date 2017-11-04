var models = require('../models');

const headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'accept-charset': 'utf-8'
};

module.exports = {
  messages: {
    get: function (req, res) {
      // giving client all the messages
      models.messages.get((messages) => {
        res.writeHead(200, headers);
        res.end(messages);
      });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        console.log('------ test body ---------', body);
        models.messages.post(JSON.parse(body), () => {
          res.writeHead(201, headers);
          res.end();
        });
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // serve up the users
      models.messages.get((usernames) => {
        res.writeHead(200, headers);
        res.end(usernames);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, () => {
        res.writeHead(201, headers);
        res.end();
      });
    }
  }
};


// handles the request
// getting data from the data base

// res will have conv. methods for me



