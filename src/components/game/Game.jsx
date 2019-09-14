import React from 'react';
import UserControlDisplay from './components/userControlDisplay/UserControlDisplay';
import Workers from "./components/workers/Workers";
import SwitchTechnology from "./components/switch-technology/SwitchTechnology";

import './game.css';


const Game = () => {
    return (<div className='game'>
        <div className="holst-clicker">

        </div>
        <div className='wrapper-control-panel'>
            <Workers />
            <UserControlDisplay />
            <SwitchTechnology />
        </div>
    </div>)
};


export default Game;
