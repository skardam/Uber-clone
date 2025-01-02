const mongoose = require('mongoose');

function connectToDb() {
  mongoose.connect("mongodb+srv://admin:admin@cluster0.qeldy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB:", err);
    });
}

module.exports = connectToDb;
