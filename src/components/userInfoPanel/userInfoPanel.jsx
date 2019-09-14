import React from 'react';
import {Link} from "react-router";
import connection from '../../services/socketConnection'

const userInfoPanel = () => {
    return (
        <ul>
            <li>content 1</li>
            <li>content 2</li>
            <li>content 3</li>
            <li>content 4</li>
            <li>content 5</li>
            <Link to='/game' onlyActiveOnIndex>
                <div onClick={() => connection()}>
                    Game
                </div>
            </Link>
            <button onClick={() => connection()}>
                Socket
            </button>

        </ul>
    )
};


export default userInfoPanel;
