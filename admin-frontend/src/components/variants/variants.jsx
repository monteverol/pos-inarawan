import React from 'react';
import './variants.css';

const Variant = ({ label, radioName, cost, id }) => {
    let borderColor;

    if (label.split(" ")[0].toLowerCase() == "hot") {
        borderColor = "#9E4742";
    } else {
        borderColor = "#42779E";
    }

    return (
        <label htmlFor={radioName.concat(id)}>
            <div className="Variant">
                <div className="label" style={{ borderColor: borderColor }}>
                    <div className="custom-radio">
                        <input type="radio" id={radioName.concat(id)} name={radioName} />
                        <label htmlFor="radio1"></label>
                    </div>
                    <h1>{label}</h1>
                </div>
                <h1 className="cost">₱ {cost}</h1>
            </div>
        </label>
    );
}

export default Variant;