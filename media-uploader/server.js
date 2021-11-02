// Dependencies implementation
const express = require('express')
const app = express()
const port = 3000
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017/contentdb";

// Initialize database
MongoClient.connect(mongoUrl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("projectImages", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// Define server directory
app.use(express.static(__dirname));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

// Serve on localhost and port {port}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
