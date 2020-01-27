import React from 'react';
import '../ToggleButton/ToggleButton.css'


const toggleButton = (props) => (
    <button className="toggle_button" onClick={props.transfer}>
        <div className="line"/>
        <div className="line"/>
        <div className="line"/>
    </button>
);

export default toggleButton;