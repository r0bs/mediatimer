import React, { Component } from 'react';

export class Player extends Component {

    shouldStartPlayback(media, timeLeftSeconds, mediaDuration) {
        return media ? mediaDuration ? timeLeftSeconds <= mediaDuration ? true : false : false : false;
    }

    shoudStopPlayback(media, timeLeftSeconds) {
        return media ? timeLeftSeconds <= 0 ? true : false : false;
    }

    renderPlayer(media, timeLeftSeconds, mediaDuration) {

        if (this.shouldStartPlayback(media, timeLeftSeconds, mediaDuration)) {
            this.play();
        }
        if (this.shoudStopPlayback(media, timeLeftSeconds)) {
            this.stop();
        }
        return ( 
            <div id="player" />
        );
    }

}