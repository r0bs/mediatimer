import { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions';
import { durationObjectToSeconds } from "./TimeConverter"

class Tick extends Component {

  constructor(props) {
    super();
    this.props = props;
  }

  componentWillReceiveProps(nextProps) {

    const newDurationInSeconds = durationObjectToSeconds(nextProps.duration);
    const currentDurationInSeconds = durationObjectToSeconds(this.props.duration);

    //FIXME: Timer isn't reset when time is decreased by one second manually
    if (newDurationInSeconds < (currentDurationInSeconds-1) | newDurationInSeconds > currentDurationInSeconds) {
      this.setTimer()
    }
  }

  setTimer() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.countDown(), 1000);
  }

  countDown() {
    const currentDurationInSeconds = durationObjectToSeconds(this.props.duration);
    if (currentDurationInSeconds > 0) {
      return this.props.dispatch(tick());
    }

    clearInterval(this.timer);
  }

  render() {
    return (null);
  }
}

const mapStateToProps = (state) => {
  return {
    duration: state.time.duration
  }
}

export default connect(
  mapStateToProps
)(Tick)