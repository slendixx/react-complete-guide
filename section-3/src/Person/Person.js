import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.clickHandler}>
        I am {props.name} and I am {props.age} years old.
      </p>
      <div>{props.children}</div>
      <input
        type="text"
        onChange={props.changedHandler}
        value={props.name}
      ></input>
    </div>
  );
};

export default person;
