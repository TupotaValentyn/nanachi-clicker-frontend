import React, {useState} from 'react';

import UserControlDisplay from './components/userControlDisplay/UserControlDisplay';
import Workers from "./components/workers/Workers";
import SwitchTechnology from "./components/switch-technology/SwitchTechnology";

import './game.css';


const Game = () => {

    const [count, setCount] = useState(0);

    return (<div className='game'>
        <div className="holst-clicker" onClick={() => setCount(count + 1 )}>
            <h1>
                {count}
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
