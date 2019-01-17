import React, { Component } from 'react';
import personStyle from './Person.css';
import "./Person.css";

var person = (pros) => {
    return (
        <div className={personStyle.person}>
            <a onClick={pros.deletePerson} className={personStyle.closeIcon}>x</a>
            <p onClick={pros.click}>I'm {pros.name} and i'm {pros.age} year(s) old</p>
            <p>{pros.children}</p>
            <input className={personStyle.nameInput} onChange={pros.changeName} value={pros.name}/>
        </div>
    );
};

export default person;