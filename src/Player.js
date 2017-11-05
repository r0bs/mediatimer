import { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.loadAudio(this.props.audioFileUrl);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.audioFileUrl !== nextProps.audioFileUrl) {
            this.loadAudio(nextProps.audioFileUrl);
        }
        if(this.audio && (nextProps.timeLeftSeconds > this.props.timeLeftSeconds)) {
            this.stopAudio();
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

    playAudio() {
        this.audio.play();
    }

    stopAudio() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    shouldStartPlayback() {
        return this.audio ? this.props.timeLeftSeconds < this.audio.duration ? true : false : false;
    }

    render() {
        if(this.shouldStartPlayback()) {
            this.playAudio();
        }
        return(null);
    }
}

const mapStateToProps = (state) => {
    return {
        timeLeftSeconds: state.time.time,
        audioFileUrl: state.media.audio
    };
}

export default connect(mapStateToProps)(Player);

