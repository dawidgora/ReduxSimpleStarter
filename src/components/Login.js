import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {loginUser} from "../actions/AuthAction";
import logo from "../../img/yt-drawn-logo.png";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            email: 'dawidgora@icloud.com',
            password: 'qwerty123',
            error: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.loginUser({
            email: this.state.email,
            password: this.state.password
        }, response => {
            if (response.error !== undefined) {
                alert(response.error.message);
            } else {
                this.setState({redirect: '/'});
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <div className="container loginWrapper">
                <div className="col-xs-12 col-sm-12 col-md-6 loginWrapperInner">
                    <div className="logoWrapper">
                        <img className="logo" src={logo} />
                        <h3 className="labelText">YouTube Favourites</h3>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="labelText">Email address</label>
                            <input type="email"
                                   className="form-control"
                                   placeholder="Enter your email"
                                   value={this.state.email}
                                   onChange={e => this.setState({email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <label className="labelText">Password</label>
                            <input type="password"
                                   className="form-control"
                                   placeholder="Enter your password"
                                   value={this.state.password}
                                   onChange={e => this.setState({password: e.target.value})}
                            />
                        </div>
                        <div className="loginButtons">
                            <button type="submit" className="btn btn-danger">Log in</button>
                            <Link className="btn btn-danger" to="/register">Register account</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {loginUser})(Login);
