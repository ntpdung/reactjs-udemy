import React, { Component } from 'react';
import appStyle from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import logo from '../assets/images/logo.svg';
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
    let persons = null, 
      classes = [appStyle.txtGreen],
      buttonClass = '';

    //dynamic style
    if(this.state.persons.length < 2) {
      classes.push(appStyle.txtBlue);
    }

    if (this.state.persons.length < 1) {
      classes.push(appStyle.txtRed)
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            changeName={this.nameChangeHandler}
            deletePerson={this.deletePerson}/>
        </div>
      );

      buttonClass = appStyle.red;
    };

    let jsx = (
      <div className={appStyle.App}>
        <Cockpit
          persons={this.state.persons}
          buttonClass={buttonClass} 
          toggleName={this.toggleDisplayPersonName}/>

        { persons }
      </div>
    );

    return jsx;
  }
}

export default App;
