import React from "react";

const userOutput = (props) => {
  return (
    <div style={props.style}>
      <p>My username is:</p>
      <p>{props.username}</p>
    </div>
  );
};

export default userOutput;
