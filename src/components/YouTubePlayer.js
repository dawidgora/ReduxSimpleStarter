import React, {Component} from 'react';

export default class YouTubePlayer extends Component {
    render() {
        if (!this.props.currentVideo) {
            return <div className="player"><h3>No video selected!</h3></div>
        }

        const videoUrl = 'http://www.youtube.com/embed/' + this.props.currentVideo.id + '?autoplay=1';

        return (
            <div className="player">
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                        src={videoUrl}
                        frameBorder="0"/>
            </div>
        );
    }
}
