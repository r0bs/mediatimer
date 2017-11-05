import moment from "moment";

const secondsInOneDay = 86400;

export const getDurationAsSeconds = pointInTime => {
    let durationAsSeconds = moment.duration(pointInTime.diff(moment())).asSeconds();
    if (durationAsSeconds < 0) {
        durationAsSeconds = durationAsSeconds + secondsInOneDay;
    }
    return parseInt(durationAsSeconds, 10);
} 

export const calculatePointOfTime = secondsToAdd => {
    return moment().add(secondsToAdd, "seconds").format("HH:mm:ss")
}