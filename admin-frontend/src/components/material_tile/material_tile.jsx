import React from 'react';
import './material_tile.css';
import trash_icon from '../../assets/icons/trash_icon.png';

const MaterialTile = ({ material, mass }) => {
    return (
        <div className="MaterialTile">
            <h1>{material}</h1>
            <h1>{mass}</h1>
            <img src={trash_icon} alt="Trash Icon" />
        </div>
    );
}

export default MaterialTile;