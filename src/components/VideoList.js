import React, {Component} from 'react';
import _ from 'lodash';
import Video from "./Video";
import {connect} from "react-redux";
import {searchVideos} from "../actions/SearchAction";

class VideoList extends Component {
    constructor(props) {
        super(props);

        this.loadMore = this.loadMore.bind(this);
    }

    renderItems() {
        return _.map(this.props.videos, video => {
            return (
                <Video key={video.id} videoData={video}/>
            );
        });
    }

    loadMore() {
        this.props.searchVideos(null, this.props.search.nextPageToken, response => {

        });
    }

    renderNextPageButton() {
        if (this.props.videos.length && this.props.nextPageToken) {
            return (
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="col-12 btn btn-danger loadMore" onClick={this.loadMore}>Load more</div>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="video-list-wrapper">
                <div className="video-list row">
                    {this.renderItems()}
                </div>
                {this.renderNextPageButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {search} = state;

    return {search};
};

export default connect(mapStateToProps, {searchVideos})(VideoList);
