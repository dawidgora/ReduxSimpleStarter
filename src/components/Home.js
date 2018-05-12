import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

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
        }
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
                <div className="row">
                    <div className="col-12 col-md-8">
                        asdasd
                    </div>
                    <div className="col-12 col-md-4">
                        asdas
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {auth} = state;

    return {auth};
};

export default connect(mapStateToProps)(Home);