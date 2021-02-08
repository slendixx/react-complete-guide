import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Animal from "./Animal/Animal";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working</p>
        <Person />
        <Animal />
        <Person />
      </div>
    );
    // equivalent to
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, i'm a React App"),
    //   React.createElement("p", null, "This is really working")
    // );
  }
}

export default App;
