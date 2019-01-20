import React from 'react';
import Person from "./Person/Person";

var persons = (props) => (
    props.persons.map((person, index) => {
        return <Person
            name={person.name}
            age={person.age}
            deletePerson={props.deletePerson.bind(this, index)}
            key={person.id}
            changeName={(event) => props.changeName(event, person.id)}>
        </Person>
    })
);

export default persons;