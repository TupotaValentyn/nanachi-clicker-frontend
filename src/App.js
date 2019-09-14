import React  from "react";
import { Router, browserHistory, Route } from 'react-router';
import UserMainProfile from './components/userMainProfile/userMainProfile';
import Game from './components/game/Game'
import './App.css';


const App = () => {

    return (
        <Router history={browserHistory}>
            <Route path="/" component={UserMainProfile}/>
            <Route path="/game" component={Game}/>
        </Router>
    );

};

export default App;
