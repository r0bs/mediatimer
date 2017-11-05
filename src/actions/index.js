export const setTimer = time => {
    return {
        type: "SET_TIME",
        time
    }
}

export const tick = time => {
    return {
        type: "TICK",
        time
    }
}

export const setPointInTime = pointInTime => {
    return {
        type: "SET_POINT_IN_TIME",
        pointInTime
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