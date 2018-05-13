import React, {Component} from 'react';
import {connect} from "react-redux";
import {searchVideos} from "../actions/SearchAction";

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

        this.props.searchVideos({
            query: this.state.query
        }, null, response => {

        });
    }

    render() {
        return (
            <div className="search">
                <div className="input-group mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="Search"
                           value={this.state.query}
                           onChange={e => this.setState({query: e.target.value})}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {searchVideos})(Search);