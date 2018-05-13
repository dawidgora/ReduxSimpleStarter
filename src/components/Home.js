import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Search from "./Search";
import VideoList from "./VideoList";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: null
        };
    }

    componentDidMount() {
        // if (!this.props.auth.authObject) {
        //     this.setState({redirect: '/login'});
        // }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }
        // if (!this.props.auth.authObject) {
        //     return <div className="container">loading...</div>
        // }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Search/>
                    </div>
                    <div className="col-12">
                        <VideoList videos={this.props.search.videos} nextPageToken={this.props.search.nextPageToken}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {auth, search} = state;

    return {auth, search};
};

export default connect(mapStateToProps)(Home);