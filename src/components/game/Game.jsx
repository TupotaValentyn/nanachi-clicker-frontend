import React, {useState, useContext} from 'react';

import UserControlDisplay from './components/userControlDisplay/UserControlDisplay';
import Workers from "./components/workers/Workers";
import SwitchTechnology from "./components/switch-technology/SwitchTechnology";
import {addClicks} from "../../services/socketConnection"
import { ContextOne } from "../../ContextOne";

import './game.css';


const Game = () => {

    const [count, setCount] = useState({'frontend': 0, 'backend': 0});
    let {state, dispatch} = useContext(ContextOne);

    let updateUser = () => {
        dispatch({type: 'set-user', payload: Date.now()});
    };

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
            <button onClick={() => {updateUser();console.log(state)}}>sasat</button>
        </div>
    </div>)
};


export default Game;
