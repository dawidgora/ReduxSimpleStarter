import React, {Component} from 'react';

export default class YouTubePlayer extends Component {
    render() {
        if (!this.props.currentVideo) {
            return <div>No video selected!</div>
        }

        const videoUrl = 'http://www.youtube.com/embed/' + this.props.currentVideo.id + '?autoplay=1';

        return (
            <div>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={videoUrl}
                        frameBorder="0"/>
            </div>
        );
    }
}