import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </div>
            </Router>
        );
    }
}
