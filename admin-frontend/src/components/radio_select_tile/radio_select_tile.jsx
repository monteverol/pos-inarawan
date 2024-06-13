import React, { useState } from 'react';
import './radio_select_tile.css';

const RadioSelectTile = ({ id, radioName, label}) => {
    const [selected, setSelected] = useState(false);
    const toggleSelect = () => {
        setSelected(selected ? false : true);
    }
    return (
        <label htmlFor={radioName.concat(id)}>
            <div className={selected ? "RadioSelectTile selected" : "RadioSelectTile"}>
                <div className="custom-radio">
                    <input type="radio" 
                    id={radioName.concat(id)} 
                    name={radioName}
                    onChange={toggleSelect} />
                    <label htmlFor="radio1"></label>
                </div>
                <h1 className="label">{label}</h1>
            </div>
        </label>
    );
}

export default RadioSelectTile;