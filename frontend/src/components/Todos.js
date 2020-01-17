import React, { Component } from "react";
import { Consumer } from "../context";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos } = value;
          return todos.map(todos => <Todo todo={todos} key={todos.id}></Todo>);
        }}
      </Consumer>
    );
  }
}

export default Todos;
