var functions = require("firebase-functions");
var cors = require("cors")({ origin: true });
var express = require("express");
var app = express();
// var apis = require("./api");
var bodyParser = require("body-parser");
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
app.use(bodyParser.json());

var db = admin.firestore();

app.use(cors);
app.get("/api/:id", async (req, res) => {
  var id = req.params.id;
  var information = await db
    .collection("storing")
    .doc(id)
    .get();
  // if (information.exists) {
  return res.send(information.data());
  // } else {
  //   return res.send("no data found");
  // }
});

app.post("/api", async (req, res) => {
  //   console.log(JSON.parse(req.body));
  var ref = await db.collection("storing").add(req.body);
  return res.send({ id: ref.id });
});

app.put("/api/:id", async (req, res) => {
  var id = req.params.id;
  var ref = await db
    .collection("storing")
    .doc(id)
    .set(req.body);
  return res.send({ id: id });
});

app.delete("/api/", async (req, res) => {
  var id = req.body.id;
  var docRef = db.collection("storing").doc(id);
  var docRefGet = await docRef.get();
  if (docRefGet.exists) {
    var deletedDoc = await docRef.delete();
    return res.send(docRefGet.data());
  } else {
    return res.send("document doesn't exist");
  }
});

exports.app = functions.https.onRequest(app);
