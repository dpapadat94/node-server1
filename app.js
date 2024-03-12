//Run existing JavaScript files on your computer
let fname = "Dennis";
let lname = "Papadatos";
function greeting() {
  console.log(`Hello ${fname} ${lname}, this text was created with Node.JS`);
}
greeting();

// Create a server, from the lecture code sample

const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("somthing went wrong", error);
  } else {
    console.log("server is listening on port" + " " + port);
  }
});
