//const MongoClient = require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

// var obj = new ObjectID();
// console.log(obj);

//object desctructuring
// var user = { name: "ana", age: 22 };
// var { name } = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log("Connected to MongoDB server");

  //const myDB = db.db("TodoApp");
  // myDB.collection("Todos").insertOne({
  //   text: "something to do",
  //   completed: false
  // },
  // (err, result) => {
  //   if (err) return console.log("Unable to insert todo", err);
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // const myDB = db.db("TodoApp");
  // myDB.collection("Users").insertOne({
  //   name: "Ana",
  //   age: 22,
  //   location: "Paris"
  // },
  // (err, result) => {
  //   if (err) return console.log("Unable to insert user", err);
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
