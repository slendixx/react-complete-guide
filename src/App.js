import React, { Component } from "react";
// import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import Animal from "./Animal/Animal";

////////////////////////////////////////////////////
// class-based component version
////////////////////////////////////////////////////
class App extends Component {
  state = {
    persons: [
      { name: "Esteban", age: 20 },
      { name: "Lucas", age: 26 },
      { name: "Ellie", age: 17 },
    ],
  };

  // switchNameHandler = () => {
  //   // Don't Mutate the state of a component directly
  //   // this.state.persons[0].name = "Esteban Duran";
  //   const persons = this.state.persons;
  //   const aux1 = persons[0];
  //   const aux2 = persons[1];
  //   persons[0] = persons[2];
  //   persons[1] = aux1;
  //   persons[2] = aux2;

  //   this.setState({
  //     persons,
  //   });
  // };
  switchNameHandler = (newName) => {
    // Don't Mutate the state of a component directly
    // this.state.persons[0].name = "Esteban Duran";
    const persons = this.state.persons;
    persons[0].name = newName;
    persons[1].name = newName;
    persons[2].name = newName;

    this.setState({
      persons,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler("Jake paul")}>
          Switch Names
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clickHandler={this.switchNameHandler.bind(this, "Logan Paul")}
        >
          I have a pet animal.
          <Animal sound="Meow" age="3" />
        </Person>
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

////////////////////////////////////////////////////
// functional component version
////////////////////////////////////////////////////
// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Esteban", age: 20 },
//       { name: "Lucas", age: 26 },
//       { name: "Ellie", age: 17 },
//     ],
//     otherData: "hello world",
//   });

//   console.log(personsState);

//   const switchNameHandler = () => {
//     // Don't Mutate the state of a component directly
//     // this.state.persons[0].name = "Esteban Duran";
//     const persons = personsState.persons;
//     const aux1 = persons[0];
//     const aux2 = persons[1];
//     persons[0] = persons[2];
//     persons[1] = aux1;
//     persons[2] = aux2;

//     setPersonsState({
//       persons,
//       otherData: "hello world",
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, i'm a React App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Names</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         I have a pet animal.
//         <Animal sound="Meow" age="3" />
//       </Person>
//     </div>
//   );
// };

// export default app;
