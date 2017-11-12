import moment from "moment";

const secondsInOneDay = 86400;
const secondsInOneHour = 3600;
const secondsInOneMinute = 60;
const msInOneSecond = 1000;

export const getDurationAsSeconds = pointInTime => {
    let durationAsSeconds = moment.duration(pointInTime.diff(moment())).asSeconds();
    if (durationAsSeconds < 0) {
        durationAsSeconds = durationAsSeconds + secondsInOneDay;
    }
    return parseInt(durationAsSeconds, 10);
};

export const calculatePointOfTime = secondsToAdd => {
    return moment().add(secondsToAdd, "seconds").format("HH:mm:ss")
};

export const durationObjectToSeconds = durationObj => {
    return (durationObj.hours * secondsInOneHour) +
    (durationObj.minutes * secondsInOneMinute) +
    parseInt(durationObj.seconds, 10);
};

export const calculateDuration = pointInTime => {
    let durationInS = parseInt( pointInTime.diff(moment()) / msInOneSecond, 10);
    durationInS = durationInS <= 0 ? durationInS + secondsInOneDay : durationInS;
    return secondsToDuration(durationInS);
};

export const secondsToDuration = durationInS => {
    return {
        hours: parseInt( ( durationInS % secondsInOneDay) / secondsInOneHour, 10).toString().padStart(2,0),
        minutes: parseInt( ( durationInS % secondsInOneHour) / secondsInOneMinute, 10).toString().padStart(2,0),
        seconds: parseInt( durationInS % secondsInOneMinute ).toString().padStart(2,0)
    }
};

export const convertMomentToDurationObject = momentObj => {
    return {
        hours: momentObj.hour().toString().padStart(2,0),
        minutes: momentObj.minute().toString().padStart(2,0),
        seconds: momentObj.second().toString().padStart(2,0)
    }
}

export const convertDurationObjectToMoment = durationObj => {
    const {hours, minutes, seconds} = durationObj;
    return moment(`${hours}:${minutes}:${seconds}`, "HH:mm:ss");
}

export const substractSeconds = (duration, substractor) => {
    return secondsToDuration(durationObjectToSeconds(duration) - substractor);
}

export const calculatePointInTime = duration => {
    return moment().add(duration);
};