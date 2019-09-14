import React, {Component} from 'react';
import { Router, browserHistory, Route } from 'react-router';
import userMainProfile from './components/userMainProfile/userMainProfile';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={userMainProfile}/>
            </Router>
        );
    }
}

export default App;
