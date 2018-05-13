import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, Redirect, Route} from "react-router-dom";
import Search from "./Search";
import {logoutUser} from "../actions/AuthAction";
import Favorites from "./Favorites";
import {fetchFavorites} from "../actions/FavoritesAction";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null
        };
    }

    componentDidMount() {
        if (!this.props.auth.authObject) {
            this.setState({redirect: '/login'});
            return;
        }

        this.props.fetchFavorites(this.props.auth.authObject.user.uid);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        if (!this.props.auth.authObject) {
            return <div className="container">loading...</div>
        }
        return (
            <div className="container-fluid">
                <div className="menu">
                    <Link to="/search">Search</Link>
                    <Link to="/favorites">Favorites</Link>
                </div>
                <div className="row">
                    <Route exact path={`/search`} component={Search}/>
                    <Route exact path={`/favorites`} component={Favorites}/>
                    <Route exact path="/" render={() => (
                        <h3>Hello</h3>
                    )}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {auth} = state;

    return {auth};
};

export default connect(mapStateToProps, {logoutUser, fetchFavorites})(Home);