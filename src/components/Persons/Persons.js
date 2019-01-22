import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log("[Persons.js]Inside constructor");
    };

    componentDidMount() {
        console.log("[Persons.js] Inside componentDidMount");
    };

    componentWillMount() {
        console.log("[Persons.js] Inside componentWillMount");
    };

    render() {
        console.log("[Persons.js] Inside render()");
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                deletePerson={this.props.deletePerson.bind(this, index)}
                key={person.id}
                changeName={(event) => this.props.changeName(event, person.id)}>
            </Person>
        })
    };
}

export default Persons;