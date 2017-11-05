import { combineReducers } from 'redux'
import { getDurationAsSeconds, calculatePointOfTime } from "./TimeConverter";

const time = (state = {totalDuration: "", pointInTime: "00:00:00"}, action) => {
    switch (action.type) {
        case "SET_TIME":
            return {
                time: action.time,
                totalDuration: action.time,
                pointInTime: calculatePointOfTime(action.time)
            }
        case "SET_POINT_IN_TIME":
            const durationAsSeconds = getDurationAsSeconds(action.pointInTime);
            return {
                time: durationAsSeconds,
                totalDuration: durationAsSeconds,
                pointInTime: action.pointInTime.format("HH:mm:ss")
            }
        case "TICK":
            return {
                time: state.time - 1,
                totalDuration: state.totalDuration,
                pointInTime: state.pointInTime,
            }
        default:
            return state;
    }
}

const media = (state = {}, action) => {
    switch (action.type) {
        case "SET_YOUTUBE_VIDEO_ID":
            return {
                audio: "",
                youTubeVideoId: action.youTubeVideoId,
            }
        case "SET_AUDIO":
            return {
                audio: action.audio,
                youTubeVideoId: ""
            }
        default:
            return state;
    }
}

const playbackApp = combineReducers({
    time,
    media
});

export default playbackApp;