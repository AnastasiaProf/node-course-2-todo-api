var mongoose = require("mongoose");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    required: true,
    type: mongoose.Schema.Types.ObjectId
  }
});

module.exports = { Todo };

// what was in server.js
// var secondTodo = new Todo({
//   text: "Walk the cat",
//   completed: true,
//   completedAt: 123
// });
//
// secondTodo.save().then(
//   doc => {
//     console.log("Save todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo", e);
//   }
// );
