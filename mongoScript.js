const mongoose = require("mongoose");

mongoose
  .connect("mongodb://abshar:123@mongo:27017", {
    dbName: "abshar",
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
