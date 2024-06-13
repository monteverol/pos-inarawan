import React, { useState } from 'react';
import './sales_report.css';
import AdminNavigation from '../../components/admin_navigation/admin_navigation';
import DatePicker from '../../components/date_picker/date_picker';

function SalesReport() {
    const [totalSalesRate, setTotalSalesRate] = useState('+2.33%');
    const [totalOrdersRate, setTotalOrdersRate] = useState('-5.33%');
    const [cancelledOrdersRate, setTotalCancelledOrdersRate] = useState('-5.33%');
    const [grossProfitRate, setGrossProfitRate] = useState('+2.39%');
    const [netIncomeRate, setNetIncomeRate] = useState('+2.35%');

    return(
        <div className="SalesReport">
            <AdminNavigation />
            <div className="content">
                <div className="actions">
                    <h1 className="title">SALES REPORT</h1>
                    <div className="buttons">
                        <DatePicker label="From" backgroundColor="#645B51"/>
                        <DatePicker label="To" backgroundColor="#645B51"/>
                        <button type="button" className="swap-view">Swap view</button>
                    </div>
                </div>
                <div className="header">
                    <div className="tile">
                        <h2>Total Sales</h2>
                        <h1>₱ 23,436</h1>
                        <h3 className={totalSalesRate.charAt(0) === '+' ? 'up' : 'down'}>{totalSalesRate}</h3>
                    </div>
                    <div className="tile">
                        <h2>Total Orders</h2>
                        <h1>43</h1>
                        <h3 className={totalOrdersRate.charAt(0) === '+' ? 'up' : 'down'}>{totalOrdersRate}</h3>
                    </div>
                    <div className="tile">
                        <h2>Cancelled Orders</h2>
                        <h1>5</h1>
                        <h3 className={cancelledOrdersRate.charAt(0) === '+' ? 'up' : 'down'}>{cancelledOrdersRate}</h3>
                    </div>
                    <div className="tile">
                        <h2>Gross Profit</h2>
                        <h1>₱ 7,347</h1>
                        <h3 className={grossProfitRate.charAt(0) === '+' ? 'up' : 'down'}>{grossProfitRate}</h3>
                    </div>
                    <div className="tile">
                        <h2>Net Income</h2>
                        <h1>₱ 38,490</h1>
                        <h3 className={netIncomeRate.charAt(0) === '+' ? 'up' : 'down'}>{netIncomeRate}</h3>
                    </div>
                </div>
                <div className="body">
                    <div className="header">
                        <h1>Ranking</h1>
                        <h1>Product Name</h1>
                        <h1>Product Sold</h1>
                        <h1>% Boost in Sales</h1>
                    </div>
                    <div className="list">
                        {/* FOR LOOP ITEMS*/}
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        {/* END LOOP */}
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                        <div className="item">
                            <h1>1</h1>
                            <h1>Yumburger</h1>
                            <h1>Orders Sold</h1>
                            <h1>10.53%</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalesReport;