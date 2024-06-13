import React from 'react';
import { useNavigate } from 'react-router-dom';
import './admin_intro.css';
import help_icon from '../../assets/icons/help_icon.png';
import about_us_icon from '../../assets/icons/about_us_icon.png';
import log_out_icon from '../../assets/icons/log_out_icon.png';
import sales_report from '../../assets/icons/sales_report_icon.png';
import sales_forecast_report from '../../assets/icons/sales_forecast_icon.png';
import inventory_management from '../../assets/icons/inventory_management_icon.png';
import order_settings from '../../assets/icons/order_settings_icon.png';
import branch_and_employee_settings from '../../assets/icons/branch_and_employee_settings_icon.png'
import maintenance_icon from '../../assets/icons/maintenance_icon.png';

function AdminIntro() {

    const navigate = useNavigate();

    const handleSalesReport = () => {
        navigate('/sales-report');
    }

    const handleForecast = () => {
        navigate('/sales-forecast');
    }

    const handleInventory = () => {
        navigate('/inventory-management');
    }

    const handleOrderSettings = () => {
        navigate('/order-settings');
    }

    const handleBranchEmployee = () => {
        navigate('/branch-employee-settings');
    }

    return(
        <div className="AdminIntro">
            <div className="header">
                <h1>ADMIN ACCESS</h1>
                <div className="buttons">
                    <div className="button">
                        <img src={help_icon} alt="Help Icon" />
                    </div>
                    <div className="button">
                        <img src={about_us_icon} alt="About Us Icon" />
                    </div>
                    <div className="button">
                        <img src={log_out_icon} alt="Log Out Icon" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="navigation">
                <div className="row">
                    <div className="link" onClick={handleSalesReport}>
                        <img src={sales_report} alt="Sales Report Icon" />
                        <h1>Sales Report</h1>
                    </div>
                    <div className="link" onClick={handleOrderSettings}>
                        <img src={order_settings} alt="Order Settings Icon" />
                        <h1>Order Settings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="link" onClick={handleForecast}>
                        <img src={sales_forecast_report} alt="Sales Forecast Icon" />
                        <h1>Sales Forecast</h1>
                    </div>
                    <div className="link" onClick={handleBranchEmployee}>
                        <img src={branch_and_employee_settings} alt="Branch and Employee Settings Icon" />
                        <h1>Branch and Employees Settings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="link" onClick={handleInventory}>
                        <img src={inventory_management} alt="Inventory Management Icon" />
                        <h1>Inventory Management</h1>
                    </div>
                    <div className="link">
                        <img src={maintenance_icon} alt="System Maintenance Icon" />
                        <h1>System Maintenance</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminIntro;