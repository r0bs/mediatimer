import React, { Component } from 'react';
import moment from "moment";
import { connect } from 'react-redux';
import { setPointInTime } from './actions';

class TimePicker extends Component {
  
  constructor(props) {
    super();
    this.props = props;
  }

  setPointInTime(event) {
    const ringPointInTime = moment(event.target.value, "HH:mm:ss");
    this.props.dispatch(setPointInTime(ringPointInTime));
  }

  render() {
    return (
      <div>
      <input 
          value={this.props.pointInTime}
          onChange={this.setPointInTime.bind(this)}
          type="time"
          step="1"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pointInTime: state.time.pointInTime
  }
}

export default connect(mapStateToProps)(TimePicker)