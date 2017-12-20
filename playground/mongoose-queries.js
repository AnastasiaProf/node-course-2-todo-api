const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

//Todo

// var id = "5a3926efe1f956ad98947d6d";
//
// if (!ObjectID.isValid(id)) {
//   console.log("ID is not valid.");
// }

//Todo.find() this returns an array
//
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

//Todo.findOne returns one document at most

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

//Todo.findById()

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found.");
//     }
//     console.log("Todo by ID", todo);
//   })
//   .catch(e => {
//     console.log(e);
//   });

//User

var id = "5a38d3b50a5d59a75bcd7b57";

if (!ObjectID.isValid(id)) {
  console.log("ID is not valid.");
}

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User not found.");
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => {
    console.log(e);
  });
