import React, { Component } from "react";
import Todo from "./Todo";

class Todos extends Component {
  render() {
    return (
      <div>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    );
  }
}

export default Todos;
