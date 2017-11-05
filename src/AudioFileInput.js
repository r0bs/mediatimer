import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAudio } from './actions';

class AudioFileInput extends Component {
  
  constructor(props) {
    super();
    this.props = props;
  }

  setAudio(filePath) {
    this.props.dispatch(setAudio(filePath));
  }

  saveToLocalStorage(filePath) {
    // TODO: implement
  }

  saveFileAndDispatchAction(event) {
    const fileRefInLocalStorage = this.saveToLocalStorage(event.target.value);
    this.props.dispatch(setAudio(fileRefInLocalStorage));
  }

  render() {
      // TODO: Allow only AV files
    return (
      <div>
        <input onChange={this.saveFileAndDispatchAction.bind(this)} type="file" />
      </div>
    );
  }
}

export default connect()(AudioFileInput)