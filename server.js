// Process:
// npm init
// npm install express, npm install cors

const express = require("express");
const app = express();

// listen to requests with /
// this looks a bit like a click handler. Once request comes in, callback is called
app.get("/", (request, response) => {
  console.log("hi there");
  // you/the server sends the following:
  response.send('<h1>"hello world"</h1><h2>This is a server</h2>');
});

app.listen(3789, () => {
  console.log("server started");
});

// node server.js
// localhost: 3789 in the browser.
