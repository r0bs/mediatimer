import { connect} from 'react-redux';
import { Player } from "./Player";
import { durationObjectToSeconds } from "../timeUtils/TimeConverter"

class YouTubePlayer extends Player {

    constructor(props) {
        super();
        this.props = props;
        this.youTubePlayerInstance;
        this.youTubePlayer;
        this.videoDuration;
        this.apiSrc = "https://www.youtube.com/iframe_api";
        this.minVideoIdLength = 11;
        this.maxVideoIdLength = 13;
        this.initializeYouTubePlayer()
        window.onYouTubeIframeAPIReady = this.instanciateYouTubePlayer.bind(this);
        this.durationInSeconds;
    }

    componentWillReceiveProps(nextProps) {

        const nextDurationInSeconds = durationObjectToSeconds(nextProps.duration);
        this.currentDurationInSeconds = durationObjectToSeconds(this.props.duration);

        if (this.youTubePlayer && (nextDurationInSeconds >= this.currentDurationInSeconds)) {
            this.stop();
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

    changeVideo(youTubeVideoId) {
        if(this.youTubePlayer) {
            this.destroy();
        }
        if (this.isYouTubeVideoIdLengthValid(youTubeVideoId)) {
            this.instanciateYouTubePlayer(youTubeVideoId);
        }
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

    instanciateYouTubePlayer(youTubeVideoId) {
        if(!youTubeVideoId) return;
        this.youTubePlayerInstance = new YT.Player('player', { /* eslint no-undef: 0 */
            videoId: youTubeVideoId,
            playerVars: {
                "autoplay": 0,
                "controls": 0
            },
            events: {
                'onReady': this.onPlayerReady.bind(this, this.youTubePlayerInstance)
            }
        });
    }

    onPlayerReady() {
        this.youTubePlayer = this.youTubePlayerInstance;
        this.setVideoDuration();
    }

    setVideoDuration() {
        this.videoDuration = this.youTubePlayer.getDuration();
        console.log("Video duration in seconds is: ", this.videoDuration);
    }

    play() {
        if(this.youTubePlayer && this.youTubePlayer.getPlayerState() !== 1) {
            this.youTubePlayer.playVideo();
        }
    }

    stop() {
        if(this.youTubePlayer && this.youTubePlayer.getPlayerState() > 0) {
            this.youTubePlayer.stopVideo();
        }
    }
    
    destroy() {
        this.youTubePlayer.destroy();
        this.youTubePlayer = 0;
    }

    render() {
        this.durationInSeconds = durationObjectToSeconds(this.props.duration)
        return super.renderPlayer(this.youTubePlayer, this.durationInSeconds, this.videoDuration)
    }

}

const mapStateToProps = (state) => {
    return {
        duration: state.time.duration,
        youTubeVideoId: state.media.youTubeVideoId
    };
}

export default connect(mapStateToProps)(YouTubePlayer);