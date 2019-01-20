import React from 'react';
import appStyle from '../../containers/App.css';

var cockpit = (props) => {
    let classes = [appStyle.txtGreen],
        buttonClass = '';

    //dynamic style
    if (props.persons.length < 2) {
        classes.push(appStyle.txtBlue);
    }

    if (props.persons.length < 1) {
        classes.push(appStyle.txtRed)
    }

    return (
        <div>
            <h1>Hello ReactJS</h1>
            <p className={classes.join(' ')}>There are {props.persons.length} person(s)</p>
            <p>
                <button
                    className={buttonClass}
                    onClick={props.toggleName.bind(this)}>Toggle Display Name
          </button>
            </p>
        </div>
    );
};

export default cockpit;
