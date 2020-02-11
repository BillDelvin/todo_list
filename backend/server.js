const express = require("express");
const mongoose = require("mongoose");
const todosRouters = require("./router/todos");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = "mongodb://localhost:27017/myapp";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.use("/todos", todosRouters); // collection todos (url)

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
