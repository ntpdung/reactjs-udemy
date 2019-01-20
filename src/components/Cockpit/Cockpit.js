import React from 'react';
import cockpitStyle from '../../components/Cockpit/Cockpit.css';

var cockpit = (props) => {
    let classes = [cockpitStyle.txtGreen],
        buttonClass = '';
    if (props.showPersons) {
        buttonClass = cockpitStyle.red;
    }
    //dynamic style
    if (props.persons.length < 2) {
        classes.push(cockpitStyle.txtBlue);
    }

    if (props.persons.length < 1) {
        classes.push(cockpitStyle.txtRed)
    }

    return (
        <div className={cockpitStyle.Cockpit}>
            <h1>Hello ReactJS</h1>
            <p className={classes.join(' ')}>There are {props.persons.length} person(s)</p>
            <p>
                <button
                    className={buttonClass}
                    onClick={props.toggleName}>Toggle Display Name
          </button>
            </p>
        </div>
    );
};

export default cockpit;
