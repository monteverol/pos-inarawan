import React from 'react';
import './create_product.css';
import archive_icon from '../../assets/icons/archive_icon.png';
import Variant from '../variants/variants';
import MaterialTile from '../material_tile/material_tile';
import RadioSelectTile from '../radio_select_tile/radio_select_tile';

const CreateProduct = ({ toggleShow }) => {


    return(
        <div className="CreateProduct">
            <div className="create-product-container">
                <div className="upper">
                    <div className="image"></div>
                    <div className="form">
                        <div className="row1">
                            <input type="text" />
                            <button type="button">Edit</button>
                            <div className="archive-btn">
                                <img src={archive_icon} alt="Archive Icon" />
                            </div>
                        </div>
                        <div className="row2">
                            <div className="category">
                                <h1>Category<span>▼</span></h1>
                            </div>
                            <div className="sub-category">
                                <h1>Sub-Category<span>▼</span></h1>
                            </div>
                        </div>
                        <div className="row3">
                            <Variant label="Hot - 12oz." cost="165" radioName="variant" id="1" />
                            <Variant label="Cold - 12oz." cost="165" radioName="variant" id="2" />
                            <Variant label="Cold - 16oz." cost="165" radioName="variant" id="3" />
                        </div>
                    </div>
                </div>
                <div className="lower">
                    <div className="material-list">
                        <div className="list">
                            <MaterialTile material="Sugar" mass="10g" />
                            <MaterialTile material="Milk" mass="10g" />
                            <MaterialTile material="Matcha Powder" mass="10g" />
                            <MaterialTile material="Honey" mass="10g" />
                        </div>
                        <div className="add-material">
                            <div className="form">
                                <select>
                                    <option selected default disabled>Item Name</option>
                                    <option>Sugar</option>
                                    <option>Milk</option>
                                    <option>Matcha Powder</option>
                                    <option>Honey</option>
                                </select>
                                <input type="text" placeholder="g/mL" />
                            </div>
                            <button type="button">Add to List</button>
                        </div>
                    </div>
                    <div className="add-ons">
                        <div className="list">
                            <div className="col1">
                                <RadioSelectTile id="1" radioName="add-ons" label="Muscovado"/>
                                <RadioSelectTile id="2" radioName="add-ons" label="Oat Milk"/>
                                <RadioSelectTile id="3" radioName="add-ons" label="Soy Milk"/>
                            </div>
                            <div className="col2">
                                <RadioSelectTile id="4" radioName="add-ons" label="Premium Beans"/>
                                <RadioSelectTile id="5" radioName="add-ons" label="Syrup"/>
                                <RadioSelectTile id="6" radioName="add-ons" label="Whipped Cream"/>
                            </div>
                        </div>
                        <div className="buttons">
                            <button type="button" className="return" onClick={toggleShow}> Return </button>
                            <button type="button" className="confirm" onClick={toggleShow}> Confirm Product </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;