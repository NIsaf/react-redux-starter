import React from 'react';
import './Spinner.css';

const Spinner = () => (
    <div className="spinner__container">
        <div className="spinner slabs">
            <div className="slab"></div>
            <div className="slab"></div>
            <div className="slab"></div>
            <div className="slab"></div>
        </div>
    </div>
)

export default Spinner;