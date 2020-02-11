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

// const todoSchema = new mongoose.Schema({
//   title: String,
//   complete: {
//     type: Boolean,
//     default: false
//   }
// });

// const Todo = mongoose.model("todo", todoSchema);

// app.get("/todos", (req, res) => {
//   Todo.find().then(todo => {
//     res.json(todo);
//   });
// });

app.use("/todos", todosRouters);

// app.post("/todos", (req, res) => {
//   const newTodo = new Todo({
//     title: req.body.title
//   });
//   newTodo.save().then(todo => res.json(todo));
// });

// app.delete("/todos/:id", (req, res) => {
//   Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
// });

app.listen(5000, () => {
  console.log("server is running at port 5000");
});
