import React, { useContext } from 'react';
import { Link } from "react-router";
import { sub$} from '../../services/socketConnection'
import { ContextOne } from "../../ContextOne";

const UserInfoPanel = () => {

    const {state, dispatch} = useContext(ContextOne);

    sub$.subscribe(gameData => {
        if (gameData.type === 'game_tick') {
            dispatch({type: 'set-game-tick', payload: gameData.value});
        }

        if (gameData.type === 'game_player') {
            dispatch({type: 'set-user', payload: gameData})
        }

        if (gameData.type === 'game_enemy') {
            dispatch({type: 'set-enemy', payload: gameData});
        }

    });

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
            <button onClick={() => {
            }}>
                Socket
            </button>

        </ul>
    )
};

export default UserInfoPanel;
