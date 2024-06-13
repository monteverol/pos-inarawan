import React, { useState } from 'react';
import './order_settings.css';
import AdminNavigation from '../../components/admin_navigation/admin_navigation';
import CreateProduct from '../../components/create_product/create_product';
import Section from '../../components/section/section';

function OrderSettings() {
    const [category, setCategory] = useState('Coffee');
    const [expandedGroup, setExpandedGroup] = useState();
    const [showCreateProduct, setShowCreateProduct] = useState(false);
    
    const toggleShowCreateProduct = () => {
        setShowCreateProduct(showCreateProduct ? false : true);
    }

    const toggleGroup = (group) => {
        setExpandedGroup(expandedGroup === group ? null : group);
    }

    return (
        <div className="OrderSettings">
            {showCreateProduct && <CreateProduct toggleShow={toggleShowCreateProduct} />}
            <div className="wrapper">
                <AdminNavigation />
                <div className="content">
                    <div className="header">
                        <h1>ORDER SETTINGS</h1>
                        <div className="buttons">
                            <button className="voucher">Vouchers</button>
                            <button className="add-product" onClick={toggleShowCreateProduct}>Add Product</button>
                        </div>
                    </div>
                    <div className="body">
                        <div className="group">
                            <div className={`group-name ${category === 'Coffee' ? 'active' : ''}`} onClick={() => setCategory('Coffee')}>
                                <h1>Coffee</h1>
                            </div>
                            <div className={`group-name ${category === 'Pasta' ? 'active' : ''}`} onClick={() => setCategory('Pasta')}>
                                <h1>Pasta</h1>
                            </div>
                            <div className={`group-name ${category === 'Pastries' ? 'active' : ''}`} onClick={() => setCategory('Pastries')}>
                                <h1>Pastries</h1>
                            </div>
                        </div>
                        <div className="container">
                            <Section
                                title="Coffee - Sugar Free"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSettings;