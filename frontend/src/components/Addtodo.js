import React, { Component } from "react";

export default class Addtodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            className="form-control rounded-0"
            placeholder="Write your todo here"
          />
          <button
            className="btn btn-outline-secondary form-control rounded-0"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
