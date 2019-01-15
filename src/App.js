import React, { Component } from 'react';
import Person from "./Person/Person";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        name: "Hau", age: 27
      },
      {
        name: "Ho", age: 28
      }
    ],
    showPersons: false,
  };

  switchNameHandler = (newName, newAge) => {
    // Do not use it: this.state.persons[0] = "Dung";
    this.setState({
      person: [
        {
        name: newName, age: newAge
        },
        {
          name: "Ho", age: 27
        }
      ]
    });
  };

  deletePerson = (personIndex) => {
    let persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event) => {
    this.setState({
      person: [
        {
          name: event.target.value, age: 28
        },
        {
          name: "Ho", age: 27
        }
      ]
    });
  };

  toggleDisplayPersonName() {
    var doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const buttonStyle = {
      padding: "10px 15px",
      backgroundColor: "#ccc",
      borderRadius: "4px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <p>
            <button
              style={buttonStyle}
              onClick={this.switchNameHandler.bind(this, "Dung", "18")}>Switch Name
              </button>
          </p>

          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={this.deletePerson.bind(this, index)}>
            </Person>
          })
          }
        </div>
      );
    };

    let jsx = (
      <div className="App">
        <h1>Hello ReactJS</h1>
        <p>
          <button
            style={buttonStyle}
            onClick={this.toggleDisplayPersonName.bind(this)}>Toggle Display Name
          </button>
        </p>

        { persons }
      </div>
    );

    return jsx;
  }
}

export default App;
