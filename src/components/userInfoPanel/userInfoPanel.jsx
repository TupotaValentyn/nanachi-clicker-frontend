import React from 'react';
import {Link} from "react-router";

const userInfoPanel = () => {
    return (
        <ul>
            <li>content 1</li>
            <li>content 2</li>
            <li>content 3</li>
            <li>content 4</li>
            <li>content 5</li>
            <Link to='/game' onlyActiveOnIndex>
                Game
            </Link>

        </ul>
    )
};


export default userInfoPanel;
