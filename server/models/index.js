var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      
      
    }, // a function which produces all the messages
    post: function (message, callback) {
      // used to insert a message into the database
      console.log('--modelsMessage--', message);
      db.connection.connect(function(err) {
        if (err) {
          throw err;
        }
        let messageRecord = `INSERT usernames VALUES (${null}, "${message}")`;
        let messagesView = 'select * from messages';
        
        db.connection.query(messagesView, function(err, result) {
          for (let i = 0; i < result.length; i++) {
            if (result[i] === message) {
              return;
            } else {
              db.connection.query(messageRecord, function(err, result) {
                if (err) {
                  throw err;
                }
                callback();
              });
            }
          }
        });
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {
      
      
    },
    post: function (user, callback) {
      // used to insert a username into the database
      console.log('--modelsUsername--', user);
      db.connection.connect(function(err) {
        if (err) {
          throw err;
        }
        var userRecord = `INSERT usernames VALUES (${null}, "${user}")`;
        var usernamesView = 'select * from usernames';
        
        db.connection.query(usernamesView, function(err, result) {
          for (let i = 0; i < result.length; i++) {
            if (result[i] === user) {
              return;
            } else {
              db.connection.query(userRecord, function(err, result) {
                if (err) {
                  throw err;
                }
                callback();
              });
            }
          }
        });
      });
    }
  }
};



//use mysql methods in this file


