import React from 'react';
import './branch_employee_settings.css';
import AdminNavigation from '../../components/admin_navigation/admin_navigation';
import AddButton from '../../components/add_button/add_button';

function BranchEmployeeSettings() {
    return (
        <div className="BranchEmployeeSettings">
            <AdminNavigation />
            <div className="content">
                <div className="header">
                    <h1 className="title">BRANCH AND EMPLOYEE SETTINGS</h1>
                    <div className="actions">
                        <AddButton label="Branch" backgroundColor="#AAA298" />
                        <AddButton label="Employee" backgroundColor="#AC9A84" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BranchEmployeeSettings;