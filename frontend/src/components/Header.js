import React from "react";

export default function Header() {
  return (
    <div className="card bg-info text-center text-light rounded-0">
      <h2 className="display-4">
        <i className="fas fa-clipboard-list mr-3"></i>
        <span className="text-dark mr-3">Todo List</span>
      </h2>
    </div>
  );
}
