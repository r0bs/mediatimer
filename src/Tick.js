import { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from './actions';

class Tick extends Component {
  
  constructor(props) {
    super();
    this.props = props;
  }

  componentWillReceiveProps(nextProps) {
      if(this.props.totalDuration !== nextProps.totalDuration) {
          this.setTimer()
      }
  }

  setTimer() {
    if(this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => this.countDown(this.props.time), 1000);
  }

  countDown(seconds) {
    if(seconds > 0) {
      return this.props.dispatch(tick(seconds));
    }
    clearInterval(this.timer);
  }

  render() {
    return(null);
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time.time,
    totalDuration: state.time.totalDuration
  }
}

export default connect(
  mapStateToProps
)(Tick)