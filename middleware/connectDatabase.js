const mongoose = require('mongoose');

function connectDb() {
  mongoose.connect('mongodb://localhost:27017/XuaNayShop', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log("Connecting to database")
  })
}
module.exports = connectDb