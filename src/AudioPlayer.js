import { connect } from 'react-redux';
import { Player } from "./Player"

class AudioPlayer extends Player {

    constructor(props) {
        super();
        this.props = props;
        this.loadAudio(this.props.audioFileUrl);
        this.audio = 0;
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.audioFileUrl !== nextProps.audioFileUrl) {
            this.loadAudio(nextProps.audioFileUrl);
        }
        if(this.audio && (nextProps.timeLeftSeconds > this.props.timeLeftSeconds)) {
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
        return super.renderPlayer(this.audio, this.props.timeLeftSeconds, this.audio.duration);
    }
}

const mapStateToProps = (state) => {
    return {
        timeLeftSeconds: state.time.time,
        audioFileUrl: state.media.audio
    };
}

export default connect(mapStateToProps)(AudioPlayer);

