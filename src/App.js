import React, { Component } from 'react';
import TimeInput from "./TimeInput.js";
import TimePicker from "./TimePicker.js";
import AudioInput from "./AudioInput.js";
import AudioFileInput from "./AudioFileInput.js";
import YouTubeInput from "./YouTubeInput.js";
import Tick from "./Tick.js";
import AudioPlayer from "./AudioPlayer";
import YouTubePlayer from "./YouTubePlayer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeInput />
        <TimePicker />
        <AudioInput />
        <YouTubeInput />
        <AudioFileInput />

        <Tick />

        <YouTubePlayer />
        <AudioPlayer />
      </div>
    );
  }
}

export default App;
