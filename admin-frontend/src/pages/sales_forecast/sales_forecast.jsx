import React from 'react';
import './sales_forecast.css';
import AdminNavigation from '../../components/admin_navigation/admin_navigation';
import DatePicker from '../../components/date_picker/date_picker';
import BranchPicker from '../../components/branch_picker/branch_picker';

function SalesForecast() {
    return (
        <div className="SalesForecast">
            <AdminNavigation />
            <div className="content">
                <div className="header">
                    <h1 className="title">SALES FORECAST</h1>
                    <div className="actions">
                        <BranchPicker backgroundColor="#919191" textColor="#FFFFFF" />
                        <DatePicker label="From" backgroundColor="#645B51" />
                        <DatePicker label="To" backgroundColor="#645B51" />
                    </div>
                </div>
                <div className="top">
                    <div className="top-1-2">
                        <div className="top-item">
                            <h1>1</h1>
                            <h1>Matcha Latte</h1>
                        </div>
                        <div className="top-item">
                            <h1>2</h1>
                            <h1>Capuccino</h1>
                        </div>
                    </div>
                    <div className="top-3-5">
                        <div className="top-item">
                            <h1>3</h1>
                            <h1>Lorem</h1>
                        </div>
                        <div className="top-item">
                            <h1>4</h1>
                            <h1>Lorem</h1>
                        </div>
                        <div className="top-item">
                            <h1>5</h1>
                            <h1>Lorem</h1>
                        </div>
                    </div>
                </div>
                <div className="top-list">
                    <div className="top-list-header">
                        <h1>Ranking</h1>
                        <h1>Product Name</h1>
                        <h1>Orders Sold</h1>
                        <h1>% Boost in Sales</h1>
                    </div>
                    <div className="top-list-items">
                        <div className="top-list-item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="top-list-item">
                            <h1>2</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="top-list-item">
                            <h1>3</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="top-list-item">
                            <h1>4</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="top-list-item">
                            <h1>5</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="top-list-item">
                            <h1>6</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="top-list-item">
                            <h1>7</h1>
                            <h1>Yumburger</h1>
                            <h1>124</h1>
                            <h1>10.53%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesForecast;