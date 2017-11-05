import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const Counter = ({timeInSeconds}) => (
    <h1>{timeInSeconds}</h1>
);

Counter.propTypes = {
  timeInSeconds: PropTypes.number
};

const mapStateToProps = state => {
  return {
    timeInSeconds: state.time
  }
}

const CounterContainer = connect(
  mapStateToProps
)(Counter)

export default CounterContainer;
