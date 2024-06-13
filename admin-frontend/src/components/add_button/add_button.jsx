import React from 'react';
import './add_button.css';
import add_icon from '../../assets/icons/add_icon.png';

const AddButton = ({ label, backgroundColor }) => {
    return(
        <div className="AddButton" style={{ backgroundColor: backgroundColor }}>
            <img src={add_icon} alt="Add Icon" />
            <h1> {label} </h1>
        </div>
    );
}

export default AddButton;