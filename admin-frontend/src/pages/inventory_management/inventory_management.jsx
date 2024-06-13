import React from 'react';
import './inventory_management.css';
import AdminNavigation from '../../components/admin_navigation/admin_navigation';
import BranchPicker from '../../components/branch_picker/branch_picker';
import calendar_icon from '../../assets/icons/brown_calendar_icon.png';
import SearchBar from '../../components/search_bar/search_bar';
import { format } from 'date-fns';

function InventoryManagement() {
    const currentDate = new Date();
    
    return(
        <div className="InventoryManagement">
            <AdminNavigation />
            <div className="content">
                <div className="header">
                    <h1 className="title">INVENTORY</h1>
                    <div className="actions">
                        <BranchPicker 
                            backgroundColor="#FEF9F3" 
                            textColor="#AC9A84"
                            height="76px"
                        />
                        <div className="date">
                            <img src={calendar_icon} alt="Calendar Icon" />
                            <h1>{format(currentDate, 'PP')}</h1>
                        </div>
                        <SearchBar
                            height="76px"
                            width="396px"
                            placeholder="Enter Item Name"
                        />
                    </div>
                </div>
                <div className="body">
                    <div className="header">
                        <h1>Item Name</h1>
                        <h1>Cost per (g)</h1>
                        <h1>Stock (g)</h1>
                        <h1>Critical Level</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryManagement;