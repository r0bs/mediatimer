import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setYouTubeVideoId } from '../actions';

class YouTubeInput extends Component {
  
  constructor(props) {
    super();
    this.props = props;
  }

  setYouTubeVideoId(event) {
    this.props.dispatch(setYouTubeVideoId(event.target.value));
  }

  render() {
    return (
      <div>
        <input 
          value={this.props.youTubeVideoId}
          onChange={this.setYouTubeVideoId.bind(this)} 
          type="text" 
          placeholder="YouTube Video ID"
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    youTubeVideoId: state.media.youTubeVideoId
  }
}

export default connect(mapStateToProps)(YouTubeInput)