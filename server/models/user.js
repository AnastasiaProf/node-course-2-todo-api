const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email"
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        type: String,
        require: true
      },
      token: {
        type: String,
        require: true
      }
    }
  ]
});

UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ["_id", "email"]);
};

UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = "auth";
  var token = jwt
    .sign({ _id: user._id.toHexString(), access }, "123AZERTY")
    .toString();

  user.tokens = user.tokens.concat([{ access, token }]);

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
  var User = this;
  var decoded;
  //if something wrong in try it goes to the catch block

  try {
    decoded = jwt.verify(token, "123AZERTY");
  } catch (e) {
    // return new Promise((resolve, reject) => {
    //   reject();
    // });
    //same as

    return Promise.reject();
  }

  //if token is decoded means success
  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth"
  });
};

var User = mongoose.model("User", UserSchema);
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
