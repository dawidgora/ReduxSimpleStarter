import React, {Component} from 'react';
import {connect} from "react-redux";
import {searchVideos} from "../actions/SearchAction";
import VideoList from "./VideoList";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.searchVideos(
            this.state.query,
            null,
            response => {

            });
    }

    render() {
        return (
            <div>
                <div className="search">
                    <div className="input-group mb-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Search"
                               value={this.state.query}
                               onChange={e => this.setState({query: e.target.value})}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-danger" type="button" onClick={this.handleSubmit}>Search</button>
                        </div>
                    </div>
                </div>
                <VideoList videos={this.props.search.videos} nextPageToken={this.props.search.nextPageToken}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {search} = state;

    return {search};
};

export default connect(mapStateToProps, {searchVideos})(Search);
