const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());

app.get("/data/:value", function(req, res) {
  var val = req.params.value;
  var rawData = fs.readFileSync("data.json");
  var json = JSON.parse(rawData);
  return res.send(json.records[val]);
});

app.post("/data", function(req, res) {
  var rawData = fs.readFileSync("data.json");
  var json = JSON.parse(rawData);
  var length = json.records.length;
  res.send({ id: length });
  json.records.push(req.body);
  fs.writeFile("data.json", JSON.stringify(json), function(err) {
    if (err) {
      return;
    }
  });
  return;
});

app.put("/data/:value", function(req, res) {
  var val = req.params.value;
  var rawData = fs.readFileSync("data.json");
  var json = JSON.parse(rawData);
  json.records[val] = req.body;
  fs.writeFile("data.json", JSON.stringify(json), function(err) {
    if (err) {
      return;
    }
  });
  return res.send("success");
});

app.delete("/data/:value", function(req, res) {
  var val = req.params.value;
  var rawData = fs.readFileSync("data.json");
  var json = JSON.parse(rawData);
  json.records.splice(val, 1);
  fs.writeFile("data.json", JSON.stringify(json), function(err) {
    if (err) {
      return;
    }
  });
  return res.send("success");
});
app.listen(3000);
