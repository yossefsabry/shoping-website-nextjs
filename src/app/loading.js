// LoadingSpinner.js
import React from 'react';
import styles from './globals.css';

const loading = () => {
    return (
        <div className='spanner-container'>
            <div className="spinner">
                <div className="spinnerItem"></div>
            </div>
        </div>
    );
};

export default loading;
