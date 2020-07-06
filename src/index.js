const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const server = require('http').Server(app);

mongoose.connect("mongodb://localhost/td",
  {
    useNewUrlParser: true
  }
);

app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
