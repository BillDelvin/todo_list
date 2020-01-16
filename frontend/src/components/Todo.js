import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <h3 className="text-dark text-center p-1 bg-light border-bottom">
        <i className="far fa-times-circle fa-sm float-left m-1 text-danger"></i>
        Task
        <input type="checkbox" className="m-2 float-right"></input>
      </h3>
    );
  }
}

export default Todo;
