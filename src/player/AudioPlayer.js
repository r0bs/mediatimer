import { connect } from 'react-redux';
import { Player } from "./Player"
import { durationObjectToSeconds } from "../timeUtils/TimeConverter"

class AudioPlayer extends Player {

    constructor(props) {
        super();
        this.props = props;
        this.loadAudio(this.props.audioFileUrl);
        this.audio = 0;
    }

    componentWillReceiveProps(nextProps) {

        const nextDuration = durationObjectToSeconds(nextProps.duration);
        const currentDurationInSeconds = durationObjectToSeconds(this.props.duration);

        if(this.props.audioFileUrl !== nextProps.audioFileUrl) {
            if (this.audio) this.stop();
            this.loadAudio(nextProps.audioFileUrl);
        }
        if(this.audio && nextProps.audioFileUrl === "") {
            this.audio = 0;
        }
        if(this.audio && (nextDuration > currentDurationInSeconds)) {
            this.stop();
        }
    }

    loadAudio(url) {
        return new Promise((resolve) => {
            const audio = document.createElement("AUDIO")
            audio.src = url;
            audio.onloadedmetadata = () => {
                resolve(audio);
            };
        }).then(audio => {
            this.audio = audio;
        });
    }

    play() {
        this.audio.play();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    render() {
        const currentDurationInSeconds = durationObjectToSeconds(this.props.duration);

        return super.renderPlayer(this.audio, currentDurationInSeconds, this.audio.duration);
    }
}

const mapStateToProps = (state) => {
    return {
        duration: state.time.duration,
        audioFileUrl: state.media.audio
    };
}

export default connect(mapStateToProps)(AudioPlayer);

