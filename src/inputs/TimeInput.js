import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTimer } from '../actions';

class TimeInput extends Component {
  
  constructor(props) {
    super();
    this.props = props;
    this.secondsInOneDay = 86400;
  }

  setTimer(event) {
    this.props.dispatch(setTimer(parseInt(event.target.value, 10)));
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.time} 
          onChange={this.setTimer.bind(this)} 
          type="number"
          min="0"
          max={this.secondsInOneDay}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time.time
  }
}

export default connect(
  mapStateToProps
)(TimeInput)