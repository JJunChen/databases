var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      
      
    }, // a function which produces all the messages
    post: function (message, callback) {
      console.log('--modelsMessage--', message);
      // used to insert a message into the database
      let messagesView = 'select * from messages';
      let messageRecord = `INSERT messages VALUES (${null}, "${message}")`;
      
      db.connection.query(messagesView, function(err, result) {
        if (!result.length) {
          db.connection.query(messageRecord, function(err, result) {
            if (err) {
              throw err;
            }
            callback();
          });
        } else {        
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
        }
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
      var usernamesView = 'select * from usernames'; // possibly give it conditions
      
      var userRecord = `INSERT usernames VALUES (${null}, "${user}")`;
      
      db.connection.query(usernamesView, function(err, result) {
        if (!result.length) {
          db.connection.query(userRecord, function(err, result) {
            if (err) {
              throw err;
            }
            callback();
          });
        } else {        
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
        }
      });
    }
  }
};



//use mysql methods in this file


