const Todo = require("../models/todo");
module.exports = {
  create: ((req, res) => {
    const newTodo = new Todo({
      title: req.body.title
    });
    newTodo
      .save()
      .then(todo => res.json(todo))
      .catch(err => console.log(err));
  }),
//   showData:
};
