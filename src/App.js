import React, { Component } from 'react';
import Person from "./Person/Person";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Hau", 
        age: 27
      },
      {
        id: 2,
        name: "Ho", 
        age: 28
      }
    ],
    showPersons: false,
  };

  deletePerson = (personIndex) => {
    // update immutably
    // persons.splice(personIndex, 1); bad practise -> remove element from original array
    // let persons = this.state.persons.slice(); easy way, copy new array then remove element.
    // using ES6 feature:
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    var personIndex = this.state.persons.findIndex(person => {
      return person.id == id;
    });

    var person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value; 

    var persons = [
      ...this.state.persons
    ];

    persons[personIndex] = person;
    
    this.setState({
      persons: persons
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
      backgroundColor: "#bb5266",
      borderRadius: "4px",
      cursor: "pointer",
      color: "#fff",
      outlineWidth: 0,
    };

    let persons = null, 
      classes = ['txt-green'];

    //dynamic style
    if(this.state.persons.length < 2) {
      classes.push('txt-blue');
    }

    if (this.state.persons.length < 1) {
      classes.push('txt-red')
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              deletePerson={this.deletePerson.bind(this, index)}
              key={person.id}
              changeName={(event) => this.nameChangeHandler(event, person.id)}>
            </Person>
          })
          }
        </div>
      );

      buttonStyle.backgroundColor = "#ccc";
      buttonStyle.color = "#5d5d5d";
    };

    let jsx = (
      <div className="App">
        <h1>Hello ReactJS</h1>
        <p className={classes.join(' ')}>There are {this.state.persons.length} person(s)</p>
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
