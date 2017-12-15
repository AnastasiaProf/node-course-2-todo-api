const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  const myDB = db.db("TodoApp");
  // myDB
  //   .collection("Todos")
  //   .find()
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );

  //query only todos with completed = false
  // myDB
  //   .collection("Todos")
  //   .find({ _id: new ObjectID("5a339a70dda21aa5df01b498") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );

  // myDB
  //   .collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos count: ${count}`);
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );

  myDB
    .collection("Users")
    .find({ name: "Ana" })
    .toArray()
    .then(
      docs => {
        console.log("User");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch the user");
      }
    );

  //db.close();
});
