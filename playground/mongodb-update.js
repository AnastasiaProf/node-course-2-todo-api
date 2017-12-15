const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  //findOneAndUpdate
  const myDB = db.db("TodoApp");

  // myDB
  //   .collection("Todos")
  //   .findOneAndUpdate(
  //     { _id: new ObjectID("5a33aec6dda21aa5df01ba53") },
  //     {
  //       $set: {
  //         completed: true
  //       }
  //     },
  //     { returnOriginal: false }
  //   )
  //   .then(
  //     result => {
  //       console.log(result);
  //     },
  //     err => {
  //       console.log("Unable to update the todo.");
  //     }
  //   );

  myDB
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5a32ba9912aba2643b1ba907") },
      {
        $set: {
          name: "Ana"
        },
        $inc: {
          age: 1
        }
      },
      { returnOriginal: false }
    )
    .then(
      result => {
        console.log(result);
      },
      err => {
        console.log("Unable to update the todo.");
      }
    );

  //db.close();
});
