import React, {Component} from 'react';

export default class Video extends Component {
    constructor(props) {
        super(props);

        this.videoData = this.props.videoData;
    }

    render() {
        return (
            <div className="video">
                {this.videoData.id}
            </div>
        );
    }
}