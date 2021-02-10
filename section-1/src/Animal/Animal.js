import React, { Component } from "react";

class Animal extends Component {
  render() {
    return (
      <p>
        Hi I am an animal. I'm {this.props.age} years old and my sound is:{" "}
        {this.props.sound}
      </p>
    );
  }
}

export default Animal;
