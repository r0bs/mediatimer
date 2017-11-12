export const tick = () => {
    return {
        type: "TICK"
    }
}

export const setPointInTime = pointInTime => {
    return {
        type: "SET_POINT_IN_TIME",
        pointInTime
    }
}

export const setDuration = duration => {
    return {
        type: "SET_DURATION",
        duration
    }
}

export const setAudio = audio => {
    return {
        type: "SET_AUDIO",
        audio
    }
}

export const setYouTubeVideoId = youTubeVideoId => {
    return {
        type: "SET_YOUTUBE_VIDEO_ID",
        youTubeVideoId
    }
}