var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//local db
//check the server.js file for local
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

module.exports = {
  mongoose
};
