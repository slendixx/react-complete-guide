import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//////////////////////////////////////////////////////
// Assignment 1
//////////////////////////////////////////////////////
import UserInput from "./1-assigment/UserInput";
import UserOutput from "./1-assigment/UserOutput";

class App extends Component {
  state = {
    assignment: 1,
    username: "Username here",
  };
  style = {
    display: "block",
    fontSize: "150%",
    backgroundColor: "#d7d",
    width: "40%",
    margin: "10px auto",
  };

  usernameChangeHander = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Assignment {this.state.assignment}</h1>
        </header>
        <main>
          <UserInput
            changeHandler={this.usernameChangeHander}
            value={this.state.username}
          />
          <UserOutput style={this.style} username={this.state.username} />
          <UserOutput style={this.style} username={this.state.username} />
          <UserOutput style={this.style} username={this.state.username} />
        </main>
      </div>
    );
  }
}

export default App;
