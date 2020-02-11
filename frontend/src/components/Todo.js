import React, { Component } from "react";
import { Consumer } from "../context";
import Axios from "../axios";

class Todo extends Component {
  style = () => {
    const { complete } = this.props.todo;
    return { textDecoration: complete ? "line-through" : "none" };
  };

  toggle = (id, dispatch) => {
    Axios.patch(`todos/${id}`, {
      complete: !this.props.todo.complete //this part
    }).then(res => dispatch({ type: "TOGGLE", payload: id }));
  };

  remove = (id, dispatch) => {
    Axios.delete(`todos/${id}`).then(() =>
      dispatch({ type: "REMOVE", payload: id })
    );
  };

  render() {
    const { complete, title, _id } = this.props.todo;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <h3
              className="text-dark text-center p-1 bg-light border-bottom"
              style={this.style()}
            >
              <i
                className="far fa-times-circle fa-sm float-left m-1 text-danger"
                onClick={this.remove.bind(this, _id, dispatch)}
              ></i>
              {title}sss
              <input
                type="checkbox"
                checked={complete}
                className="m-2 float-right"
                onChange={this.toggle.bind(this, _id, dispatch)}
              />
            </h3>
          );
        }}
      </Consumer>
    );
  }
}

export default Todo;
