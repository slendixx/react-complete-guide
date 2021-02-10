import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <input
      className="UserInput"
      type="text"
      onChange={props.changeHandler}
      value={props.value}
    ></input>
  );
};

export default userInput;
