import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setYouTubeVideoId } from '../actions';

class YouTubeInput extends Component {
  
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      youTubeVideoId: ""
    }
  }

  setYouTubeVideoId(event) {
    this.props.dispatch(setYouTubeVideoId(event.target.value));
    this.setState({
      youTubeVideoId: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.youTubeVideoId}
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