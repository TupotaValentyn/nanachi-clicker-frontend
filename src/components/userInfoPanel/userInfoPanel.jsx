import React from 'react';
import socketConnection from '../../services/socketConnection'

const userInfoPanel = () => {
    console.log();
    return (
        <ul>
            <li>content 1</li>
            <li>content 2</li>
            <li>content 3</li>
            <li>content 4</li>
            <li>content 5</li>
            <button onClick={() => socketConnection()}>
                Test button
            </button>
        </ul>
    )
};


export default userInfoPanel;
