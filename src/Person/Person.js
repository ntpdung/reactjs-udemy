import React, { Component } from 'react';

var person = (pros) => {
    return (
        <div>
            <p onClick={pros.click}>I'm {pros.name} and i'm {pros.age} year(s) old</p>
            <p>{pros.children}</p>
        </div>
    );
};

export default person;