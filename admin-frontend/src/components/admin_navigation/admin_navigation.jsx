import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './admin_navigation.css';
import inarawan_logo from '../../assets/icons/inarawan_logo.png';
import sales_icon from '../../assets/icons/nav_sales_report_icon.png';
import forecast_icon from '../../assets/icons/nav_sales_forecast_icon.png';
import inventory_icon from '../../assets/icons/nav_inventory_icon.png';
import order_settings_icon from '../../assets/icons/nav_order_settings_icon.png';
import bne_icon from '../../assets/icons/nav_branch_and_employee_settings_icon.png';
import logout_icon from '../../assets/icons/nav_logout_icon.png';
import maintenance_icon from '../../assets/icons/nav_maintenance_icon.png';

function AdminNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogo = () => {
        navigate('/admin-intro');
    }

    const handleSales = () => {
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

    const handleMaintenance = () => {
        navigate('/system-maintenance');
    }

    const getLinkClass = (path) => {
        return location.pathname === path ? 'link active' : 'link';
    }

    return (
        <div className="AdminNavigation">
            <div className="upper">
                <img src={inarawan_logo} alt="Inarawan Logo" onClick={handleLogo} />
                <div className={getLinkClass('/sales-report')} onClick={handleSales}>
                    <img src={sales_icon} alt="Sales Report Icon" />
                </div>
                <div className={getLinkClass('/sales-forecast')} onClick={handleForecast}>
                    <img src={forecast_icon} alt="Sales Forecast Icon" />
                </div>
                <div className={getLinkClass('/inventory-management')} onClick={handleInventory}>
                    <img src={inventory_icon} alt="Inventory Icon" />
                </div>
                <div className={getLinkClass('/order-settings')} onClick={handleOrderSettings}>
                    <img src={order_settings_icon} alt="Order Settings Icon" />
                </div>
                <div className={getLinkClass('/branch-employee-settings')} onClick={handleBranchEmployee}>
                    <img src={bne_icon} alt="Branch and Employee Settings Icon" />
                </div>
                <div className={getLinkClass('/system-maintenance')} onClick={handleMaintenance}>
                    <img src={maintenance_icon} alt="System Maintenance Icon" />
                </div>
            </div>
            <div className="footer">
                <div className="link">
                    <img src={logout_icon} alt="Log Out Icon" />
                </div>
            </div>
        </div>
    );
}

export default AdminNavigation;