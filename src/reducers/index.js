import moment from "moment"
import { combineReducers } from 'redux'
import { calculateDuration, calculatePointInTime, substractSeconds } from "../timeUtils/TimeConverter";

const defaultDuration = {
    hours: "00",
    minutes: "00",
    seconds: "00"
};

const defaultPointInTime = moment().milliseconds(0);

const time = (state = {duration: defaultDuration, pointInTime: defaultPointInTime}, action) => {
    switch (action.type) {
        case "SET_POINT_IN_TIME":
            return {
                duration: calculateDuration(action.pointInTime),
                pointInTime: action.pointInTime
            }
        case "SET_DURATION":
            return {
                duration: action.duration,
                pointInTime: calculatePointInTime(action.duration)
            }
        case "TICK":
            return {
                duration: substractSeconds(state.duration, 1),
                pointInTime: state.pointInTime
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