import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, Redirect, Route} from "react-router-dom";
import Search from "./Search";
import {logoutUser} from "../actions/AuthAction";
import Favorites from "./Favorites";
import {fetchFavorites} from "../actions/FavoritesAction";
import YouTubePlayer from "./YouTubePlayer";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            videoId: null
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
                    <div className="col-12 col-md-4">
                        <Route exact path={`/search`} component={Search}/>
                        <Route exact path={`/favorites`} component={Favorites}/>
                        <Route exact path="/" render={() => (
                            <Redirect to="/favorites"/>
                        )}/>
                    </div>
                    <div className="col-12 col-md-8">
                        <YouTubePlayer currentVideo={this.props.currentVideo}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {auth, currentVideo} = state;

    return {auth, currentVideo};
};

export default connect(mapStateToProps, {logoutUser, fetchFavorites})(Home);