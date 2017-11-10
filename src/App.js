import React, { Component } from 'react';

import TimeInput from "./inputs/TimeInput.js";
import TimePicker from "./inputs/TimePicker.js";
import AudioUrlInput from "./inputs/AudioUrlInput.js";
import YouTubeInput from "./inputs/YouTubeInput.js";

import AudioPlayer from "./player/AudioPlayer";
import YouTubePlayer from "./player/YouTubePlayer";

import Tick from "./Tick.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TimeInput />
        <TimePicker />
        <AudioUrlInput />
        <YouTubeInput />

        <Tick />

        <YouTubePlayer />
        <AudioPlayer />
      </div>
    );
  }
}

export default App;
