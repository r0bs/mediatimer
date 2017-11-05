import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';

class YouTubePlayer extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.youTubePlayer;
        this.videoDuration;
        this.apiSrc = "https://www.youtube.com/iframe_api";
        this.minVideoIdLength = 11;
        this.maxVideoIdLength = 13;
        this.initializeYouTubePlayer()
        window.onYouTubeIframeAPIReady = this.instanciateYouTubePlayer.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.youTubePlayer && (nextProps.timeLeftSeconds > this.props.timeLeftSeconds)) {
            this.pauseVideo();
        }
        if ((nextProps.youTubeVideoId !== this.props.youTubeVideoId)) {
            this.changeVideo(nextProps.youTubeVideoId);
        }
    }

    initializeYouTubePlayer() {
        const apiScript = document.createElement('script');
        apiScript.async = "true";
        apiScript.src = this.apiSrc;

        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(apiScript, firstScriptTag);
    }

    isYouTubeVideoIdLengthValid(youTubeVideoId) {
        if (typeof youTubeVideoId === "undefined") {
            return false;
        }

        const idLength = youTubeVideoId.length;

        if (idLength < this.minVideoIdLength | idLength > this.maxVideoIdLength) {
            return false;
        }
        console.log("Length of YouTube Video ID '" + youTubeVideoId + "' is valid");
        return true;
    }

    changeVideo(youTubeVideoId) {
        if(this.youTubePlayer) {
            this.youTubePlayer.destroy();
            this.youTubePlayer = 0;
        }
        if (this.isYouTubeVideoIdLengthValid(youTubeVideoId)) {
            this.instanciateYouTubePlayer(youTubeVideoId);
        }
    }

    instanciateYouTubePlayer(youTubeVideoId) {
        this.youTubePlayer = new YT.Player('player', { /* eslint no-undef: 0 */
            videoId: youTubeVideoId,
            playerVars: {
                "autoplay": 0,
                "controls": 0
            },
            events: {
                'onReady': this.onPlayerReady.bind(this)
            }
        });
    }

    onPlayerReady() {
        this.setVideoDuration();
    }

    setVideoDuration() {
        this.videoDuration = this.youTubePlayer.getDuration();
    }

    playVideo() {
        this.youTubePlayer.playVideo();
    }

    pauseVideo() {
        this.youTubePlayer.stopVideo();
    }

    shouldStartPlayback() {
        return this.youTubePlayer ? this.props.timeLeftSeconds <= this.videoDuration ? true : false : false;
    }

    render() {
        if (this.shouldStartPlayback()) {
            this.playVideo();
        }
        return ( 
            <div id="player" />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        timeLeftSeconds: state.time.time,
        youTubeVideoId: state.media.youTubeVideoId
    };
}

export default connect(mapStateToProps)(YouTubePlayer);