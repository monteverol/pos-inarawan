import React, { useState } from 'react';
import './date_picker.css';
import calendar_icon from '../../assets/icons/calendar_icon.png';
import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";
import { format } from 'date-fns'

const DatePicker = ({ label, backgroundColor }) => {
    const [selected, setSelected] = useState();

    let footer = <p>Please Select a Date</p>
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>
    }

    const hexToRgba = (hex, alpha) => {
        // Remove the hash at the start if it's there
        hex = hex.replace(/^#/, '');
    
        // Parse the r, g, b values
        let bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
    
        // Return in rgba format
        return `rgba(${r},${g},${b},${alpha})`;
    };

    const today = new Date();

    return(
        <div className={selected ? "DatePicker active" : "DatePicker"}>
            <div className="wrapper" style={{backgroundColor: backgroundColor}}>
                <img src={calendar_icon} alt="Calendar Icon" />
                <h1>{selected ? format(selected, 'PP') : label}</h1>
            </div>
            <div className="date" style={{backgroundColor: hexToRgba(backgroundColor, 0.8)}}>
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    footer={footer}
                    showOutsideDays
                    fromMonth={new Date(2020, 0)}
                    toDate={today}
                    disabled={{after: today}}
                />
            </div>
        </div>
    );
}

export default DatePicker;