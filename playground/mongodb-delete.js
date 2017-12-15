const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  //deleteMany
  // const myDB = db.db("TodoApp");
  //
  // myDB
  //   .collection("Todos")
  //   .deleteMany({ text: "Eat lunch" })
  //   .then(
  //     result => {
  //       console.log(result);
  //     },
  //     err => {
  //       console.log("Unable to delete the todo.");
  //     }
  //   );

  //deleteOne
  // const myDB = db.db("TodoApp");
  //
  // myDB
  //   .collection("Todos")
  //   .deleteOne({ text: "Eat lunch" })
  //   .then(
  //     result => {
  //       console.log(result);
  //     },
  //     err => {
  //       console.log("Unable to delete the todo.");
  //     }
  //   );

  //findOneAndDelete
  // const myDB = db.db("TodoApp");
  //
  // myDB
  //   .collection("Todos")
  //   .findOneAndDelete({ completed: false })
  //   .then(
  //     result => {
  //       console.log(result);
  //     },
  //     err => {
  //       console.log("Unable to delete the todo.");
  //     }
  //   );

  //Chalenge
  const myDB = db.db("TodoApp");

  // myDB
  //   .collection("Users")
  //   .deleteMany({ name: "Ana" })
  //   .then(
  //     result => {
  //       console.log(result);
  //     },
  //     err => {
  //       console.log("Unable to delete the todo.");
  //     }
  //   );

  myDB
    .collection("Users")
    .findOneAndDelete({ _id: new ObjectID("5a32bbffca9e15643dc7a85d") })
    .then(
      result => {
        console.log(JSON.stringify(result, undefined, 2));
      },
      err => {
        console.log("Unable to delete the todo.");
      }
    );

  //db.close();
});
