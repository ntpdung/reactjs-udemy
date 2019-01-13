import React, { Component } from 'react';
import "./Person.css";

var person = (pros) => {
    return (
        <div className="person">
            <p onClick={pros.click}>I'm {pros.name} and i'm {pros.age} year(s) old</p>
            <p>{pros.children}</p>
            <input onChange={pros.changeName} value={pros.name}/>
        </div>
    );
};

export default person;