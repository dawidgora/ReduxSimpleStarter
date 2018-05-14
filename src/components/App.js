import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid appWrapper">
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
