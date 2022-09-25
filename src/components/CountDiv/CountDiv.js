import React from 'react';
import './CountDiv.css';

const CountDiv = ({ count, addItemhandler, removeItemhandler }) => {
    return (
        <div className='count-div'>
            <div onClick={removeItemhandler} className="remove-item">
                -
            </div>
            <div className="number">
                {count}
            </div>
            <div onClick={addItemhandler} className="add-more">
                +
            </div>
        </div>
    );
}

export default CountDiv;
