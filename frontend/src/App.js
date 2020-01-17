import React from "react";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Todos from "./components/Todos";
import { Provider } from "./context";
import "./App.css";

function App() {
  return (
    <Provider>
      <div className="container">
        <Header />
        <Addtodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
