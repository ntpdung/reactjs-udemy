import React, { Component } from 'react';
import Person from "./Person/Person";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    person: [
      {
        name: "Ho", age: 28
      },
      {
        name: "Hau", age: 27
      }
    ]
  };

  switchNameHandler = (newName, newAge) => {
    //console.log('Was Clicked');
    // Do not use it: this.state.person[0] = "Dung";
    this.setState({
      person: [
        {
        name: newName, age: newAge
        },
        {
          name: "Hau", age: 27
        }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {
          name: event.target.value, age: 28
        },
        {
          name: "Hau", age: 27
        }
      ]
    });
  };

  render() {
    const buttonStyle = {
      padding: "10px 15px",
      backgroundColor: "#ccc",
      borderRadius: "4px",
      cursor: "pointer"
    };

    let jsx = (
      <div className="App">
        <h1>Hello Reactjs 2</h1>
        <button style={buttonStyle} onClick={this.switchNameHandler.bind(this, "Dung", "18")}>Switch Name</button>
        <Person
          name={this.state.person[0].name} 
          age={this.state.person[0].age}
          click={this.switchNameHandler.bind(this, "Hấu", "26")}
          changeName={this.nameChangeHandler}>
        </Person>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          changeName={this.nameChangeHandler}>My favorite is Hau</Person>
      </div>
    );

    return jsx;
  }
}

export default App;
