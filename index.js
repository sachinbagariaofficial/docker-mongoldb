const express = require("express");
const app = express();
const connectDB = require("./connectDb");
const User = require("./models/Users");
const PORT = 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
connectDB();

app.get("/getUsers", async (req, res) => {
  console.log("this is request", req.query);
  const data = await User.find();
  console.log("data", data);
  res.send({ message: "this is user list" });
});

app.post("/addUser", async (req, res) => {
  const data = req.body;
  const user = await User.insertOne(data);
  res.send({ message: "user is added suscessfullys", user });
});

app.listen(PORT, () => {
  console.log("Server is running on the port 5050");
});
