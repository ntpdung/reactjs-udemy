import React, { Component } from 'react';
import personStyle from './Person.css';
import "./Person.css";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js]Inside constructor");
    };

    componentDidMount() {
        console.log("[Person.js] Inside componentDidMount");
    };

    componentWillMount() {
        console.log("[Person.js] Inside componentWillMount");
    };

    render() {
        console.log("[Person.js] Inside render()");
        return (
            <div className={personStyle.person}>
                <a onClick={this.props.deletePerson} className={personStyle.closeIcon}>x</a>
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} year(s) old</p>
                <p>{this.props.children}</p>
                <input className={personStyle.nameInput} onChange={this.props.changeName} value={this.props.name} />
            </div>
        );
    }
};

export default Person;