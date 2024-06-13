import React from 'react';
import './search_bar.css';
import search_icon from '../../assets/icons/search_icon.png';

const SearchBar = ({ height, width, placeholder }) => {
    return(
        <div className="SearchBar" style={{ height: height, width: width }}>
            <input type="text" placeholder={placeholder} />
            <img src={search_icon} alt="Search Icon" />
        </div>
    );
}

export default SearchBar;