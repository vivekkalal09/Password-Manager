const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");
require("dotenv").config();
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
app.use(cors());
const url = process.env.MONGO_URI;
console.log(url);
const client = new MongoClient(url);

// // Database Name
const dbName = "PassOP";
client.connect();
app.use(bodyparser.json());
// Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
});
// Delete a password

app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
