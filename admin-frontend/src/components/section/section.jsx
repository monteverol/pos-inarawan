import React from 'react';

const Section = ({ title, selected }) => {
    return(
        <div className={selected ? "Section selected" : "Section"}>
            <h1 className="title">{title}<span className="icon">▼</span></h1>
        </div>
    );
}

export default Section;