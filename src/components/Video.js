import React, {Component} from 'react';
import {addToFavorites, removeFromFavorites} from "../actions/FavoritesAction";
import {connect} from "react-redux";

class Video extends Component {
    constructor(props) {
        super(props);

        this.videoData = this.props.videoData;

        this.handleFavorites = this.handleFavorites.bind(this);
    }

    renderFavoritesButton() {
        const isFavorite = _.has(this.props.favorites.videos, this.props.videoData.id);

        if (isFavorite) {
            return <div className="btn btn-default" onClick={this.handleFavorites}>Remove form favorites</div>
        } else {
            return <div className="btn btn-default" onClick={this.handleFavorites}>Add to favorites</div>
        }
    }

    handleFavorites() {
        const isFavorite = _.has(this.props.favorites.videos, this.props.videoData.id);

        if (isFavorite) {
            this.props.removeFromFavorites(
                this.props.auth.authObject.user.uid,
                this.videoData.id
            );
        } else {
            this.props.addToFavorites(
                this.props.auth.authObject.user.uid,
                this.videoData
            );
        }
    }

    render() {
        return (
            <div className="video">
                {this.videoData.id}
                {this.renderFavoritesButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {auth, favorites} = state;

    return {auth, favorites};
};

export default connect(mapStateToProps, {addToFavorites, removeFromFavorites})(Video);