const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

//Todo.remove({}) removes everything get a results object

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove() returns the removed doc
// Todo.findOnAndRemove({ _id: "5a3a44bf037a9db86baaf618" }).then(todo => {
//   console.log(todo);
// });

//Todo.findByIdAndRemove() returns the removed doc

Todo.findByIdAndRemove("5a3a44bf037a9db86baaf618").then(todo => {
  console.log(todo);
});
