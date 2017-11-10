import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAudio } from '../actions';

class AudioUrlInput extends Component {
  
  constructor(props) {
    super();
    this.props = props;
  }

  setAudio(event) {
    this.props.dispatch(setAudio(event.target.value));
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.audio}
          onChange={this.setAudio.bind(this)} 
          type="url"
          placeholder="Audio File URL"
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    audio: state.media.audio
  }
}

export default connect(mapStateToProps)(AudioUrlInput)