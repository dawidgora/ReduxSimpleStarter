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
            videoId: null,
            isModalOpen: false,
            isInnerModalOpen: false
        };

        // bind functions
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
    }

    // close modal (set isModalOpen, true)
    closeModal() {
        this.setState({
            isModalOpen: false
        })
    }

    // open modal (set isModalOpen, false)
    openModal() {
        this.setState({
            isModalOpen: true
        })
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
                <div>
                    <div className="navbar navbar-default menuBar">
                        <div class="menuBarItems">
                            <Link className="btn btn-danger" to="/search">Search</Link>
                            <Link className="btn btn-danger" to="/favorites">Favorites</Link>
                        </div>
                    </div>
                    <div className="container-fluid mainContent">
                        <div className="row">
                            <div className="col-md-6">
                                <Route exact path={`/search`} component={Search}/>
                                <Route exact path={`/favorites`} component={Favorites}/>
                                <Route exact path="/" render={() => (
                                    <Redirect to="/favorites"/>
                                )}/>
                            </div>
                            <div className="col-md-6">
                                <YouTubePlayer currentVideo={this.props.currentVideo}/>
                            </div>
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
