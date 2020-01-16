import React from "react";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;
