const Todo = require("../models/todos");

module.exports = {
  delete: (req, res) => {
    Todo.findByIdAndDelete(req.params.id).then(() =>
      res.json({ remove: true })
    );
  },
  get: (req, res) => {
    Todo.find({})
      .then(todo => res.json(todo))
      .catch(err => console.log(err));
  },
  patch: (req, res) => {
    const { id } = req.params;

    Todo.findByIdAndUpdate(id, req.body).then(response => {
      console.log(response);
      res.json({ remove: true });
    });
  },
  post: (req, res) => {
    // const newTodo = new Todo({
    //   title: req.body.title
    // });

    const newTodo = new Todo(req.body);

    newTodo
      .save()
      .then(todo => res.json(todo))
      .catch(err => console.log(err));
  }
};
