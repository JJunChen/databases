var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      
      
    }, // a function which produces all the messages
    post: function () {
      
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      
      
    },
    post: function (user, callback) {
      // put this in db
      console.log('-----username-----', user);
      db.connection.connect(function(err) {
        if (err) {
          throw err;
        }
        var sql = `INSERT usernames VALUES (${null}, "${user}")`;
        db.connection.query(sql, function (err, result) {
          if (err) {
            throw err;
          }
          callback();
        });
      });
      
    }
  }
};



//use mysql methods in this file


