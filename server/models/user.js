var mongoose = require("mongoose");

var User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});
module.exports = { User };

// what was in server.js
// var newUser = new User({
//   email: "ana.c@ex.com"
// });
//
// newUser.save().then(
//   doc => {
//     console.log("Save user", doc);
//   },
//   e => {
//     console.log("Unable to save user", e);
//   }
// );
