import React, {Component} from 'react';
import {connect} from "react-redux";
import VideoList from "./VideoList";

class Favorites extends Component {
    render() {
        return (
            <div>
                <div className="favorites">
                    <VideoList videos={this.props.favorites.videos}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {favorites} = state;

    return {favorites};
};

export default connect(mapStateToProps)(Favorites);