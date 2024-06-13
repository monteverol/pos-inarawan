import React, { useState } from 'react';
import './branch_picker.css';

const BranchPicker = ({ backgroundColor, textColor, width, height }) => {
    const [selectedBranch, setSelectedBranch] = useState();

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

    return (
        <div className="BranchPicker">
            <div className={`bp-header ${selectedBranch != null ? 'filled' : ''}`} style={{ backgroundColor: backgroundColor, width: width, height: height }}>
                <h1 style={{ color: textColor }} className="branch">{selectedBranch != null ? selectedBranch : "Branch"}</h1>
                <h1 style={{ color: textColor }} className="icon">▼</h1>
            </div>
            <div className="selection" style={{ backgroundColor: hexToRgba(backgroundColor, 0.8) }}>
                <h1 style={{ color: textColor }} onClick={() => setSelectedBranch("Marikina")}>Marikina</h1>
                <h1 style={{ color: textColor }} onClick={() => setSelectedBranch("Cainta")}>Cainta</h1>
                <h1 style={{ color: textColor }} onClick={() => setSelectedBranch("Pasig")}>Pasig</h1>
            </div>
        </div>
    );
}

export default BranchPicker;