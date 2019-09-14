import React, {useState} from 'react';

import UserControlDisplay from './components/userControlDisplay/UserControlDisplay';
import Workers from "./components/workers/Workers";
import SwitchTechnology from "./components/switch-technology/SwitchTechnology";
import {addClicks} from "../../services/socketConnection"

import './game.css';


const Game = () => {

    const [count, setCount] = useState({'frontend': 0, 'backend': 0});

    return (<div className='game'>
        <div className="holst-clicker" onClick={() => {
            addClicks({'frontend': 1, 'backend': 1})
            setCount({'frontend': count['frontend'] + 1, 'backend': count['backend'] + 1});
            
            }}>
            <h1>
                Frontend: {count['frontend']} Backend: {count['backend']}
            </h1>
        </div>
        <div className='wrapper-control-panel'>
            <Workers />
            <UserControlDisplay />
            <SwitchTechnology />
        </div>
    </div>)
};


export default Game;
