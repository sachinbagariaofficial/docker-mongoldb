const mongoose = require("mongoose");

async function connectDB() {
  const monodbUrl =
    "mongodb://admin:sachin@localhost:27017/sachin-db?authSource=admin";

  try {
    await mongoose.connect(monodbUrl);
    const connection = mongoose.connection;
    connection.once("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (err) => {
      console.error(`connection error: ${err}`);
    });
  } catch (err) {
    console.log("Something goes wrong!");
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;
