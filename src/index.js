const express = require('express')
const mongoose = require('mongoose')

const app = express()
const server = require('http').Server(app);

mongoose.connect("mongodb://gustavo:tdchallenge1@ds039135.mlab.com:39135/td-challenge",
  {
    useNewUrlParser: true
  }
);

app.use(express.json());

app.use(require("./routes"));

server.listen((process.env.PORT || 5000), () => {
  console.log("Server started on port 3000");
});
