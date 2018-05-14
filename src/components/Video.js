import React, {Component} from 'react';
import {addToFavorites, removeFromFavorites} from "../actions/FavoritesAction";
import {connect} from "react-redux";
import {selectVideo} from "../actions/VideoAction";

class Video extends Component {
    constructor(props) {
        super(props);

        this.videoData = this.props.videoData;

        this.handleFavorites = this.handleFavorites.bind(this);
        this.selectVideo = this.selectVideo.bind(this);
    }

    renderFavoritesButton() {
        const isFavorite = _.has(this.props.favorites.videos, this.props.videoData.id);

        if (isFavorite) {
            return <div className="btn btn-warning" onClick={this.handleFavorites}>Remove from favorites</div>
        } else {
            return <div className="btn btn-primary" onClick={this.handleFavorites}>Add to favorites</div>
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

    selectVideo() {
        this.props.selectVideo(this.props.videoData);
    }

    render() {
        return (
        <div className="card col-md-4 col-sm-6 col-xs-12">
            <div className="col-12 videoInner">
            <img className="card-img-top" src={this.videoData.thumb} alt={this.videoData.title} />
                <div className="card-body">
                    <div className="videoText">
                        <h5 className="card-title">{this.videoData.title}</h5>
                        <p className="card-text">{this.videoData.description}</p>
                    </div>
                    <div className="videoButtons">
                        <a onClick={this.selectVideo} href="#" className="btn btn-danger">Play</a>
                        {this.renderFavoritesButton()}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {auth, favorites} = state;

    return {auth, favorites};
};

export default connect(mapStateToProps, {addToFavorites, removeFromFavorites, selectVideo})(Video);
