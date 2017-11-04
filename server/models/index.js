var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      
      
    }, // a function which produces all the messages
    post: function (body, callback) {
      console.log('--modelsMessage--', body);
      // used to insert a message into the database
      let messagesView = 'select * from messages';
      let messageRecord = `INSERT messages VALUES (${null}, "${body.username}", "${body.message}", "${body.roomname}")`;
      // let grabUserId = `select id from usernames where username = "${body.username}"`;
      
      db.connection.query(messageRecord, function(err, result) {
        if (err) {
          throw err;
        }
        db.connection.query(messagesView, function(err, result) {
          console.log('--Result---', result);
          console.log('----------err msg--------', err);
          callback();
        });
        // callback();
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
      let usernamesView = `select * from usernames where username = "${user}"`; // possibly give it conditions
      let userRecord = `INSERT usernames VALUES (${null}, "${user}")`;
      
      db.connection.query(usernamesView, function(err, result) {
        if (!result.length) {
          db.connection.query(userRecord, function(err, result) {
            if (err) {
              throw err;
            }
            callback();
          });
        } else {        
          callback();
        }
      });
    }
  }
};



//use mysql methods in this file


