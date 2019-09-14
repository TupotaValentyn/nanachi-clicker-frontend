import React, {Component} from 'react';
import { Router, browserHistory, Route } from 'react-router';
import UserMainProfile from './components/userMainProfile/userMainProfile';
import Game from './components/game/Game'
import './App.css';
import Login from './components/login/login';


class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={UserMainProfile}/>
                <Route path="/game" component={Game}/>
            </Router>
            <Login />
        );
    }
}

export default App;
