const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/contentdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("images", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});