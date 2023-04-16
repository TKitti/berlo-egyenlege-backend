const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv').config({path: __dirname + '/.env'});
const port = process.env.PORT || 3000;
const path = require('path');


mongoose.connect(dotenv.parsed.CONNECTION_STRING, {
  useNewUrlParser: true,
  dbName: 'balance-sheet',
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Successfully connected to db");
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, ()=> {
  console.log("listening to the server on http://localhost:3000")
});