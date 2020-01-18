import React, { Component } from "react";
import { Consumer } from "../context";
import axios from "axios";

export default class Addtodo extends Component {
  state = {
    title: "",
    complete: false
  };

  update = e => {
    this.setState({
      title: e.target.value
    });
  };

  add = (dispatch, e) => {
    e.preventDefault();
    const newTodo = this.state;
    axios
      .post("/todo/create", newTodo)
      .then(res => dispatch({ type: "ADD", payload: res.data }));
    this.setState({ title: "" });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.add.bind(this, dispatch)}>
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Write your todo here"
                onChange={this.update}
                value={this.state.title}
              />
              <button
                className="btn btn-outline-secondary form-control rounded-0"
                type="submit"
              >
                Add
              </button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}
