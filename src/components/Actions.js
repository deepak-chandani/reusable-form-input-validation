import React from 'react';
import './Actions.css';

const Actions = (props) => {
    return (
        <div>
            <ul className="action-list">
                <li>Share</li> |
                &nbsp;<li>Save</li> |
                &nbsp;<li>Hide</li> |
                &nbsp;<li>Report</li> |
                &nbsp;<li>Pocket</li>
            </ul>
        </div>
    )
};

export default Actions;