import React, { Component } from 'react';
import moment from "moment";
import { connect } from 'react-redux';
import { setDuration } from '../actions';
import { convertMomentToDurationObject } from "../timeUtils/TimeConverter"

class DurationPicker extends Component {
  
  constructor(props) {
    super();
    this.props = props;
  }

  setDuration(event) {
    const duration = moment(event.target.value, "HH:mm:ss");
    const durationObject = convertMomentToDurationObject(duration);
    this.props.dispatch(setDuration(durationObject));
  }

  render() {

    const {hours, minutes, seconds} = this.props.duration;
    const duration = `${hours}:${minutes}:${seconds}`;

    return (
      <div>
      <input 
          value={duration}
          onChange={this.setDuration.bind(this)}
          type="time"
          step="1"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    duration: state.time.duration
  }
}

export default connect(mapStateToProps)(DurationPicker)