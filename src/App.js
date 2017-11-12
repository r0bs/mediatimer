import React, { Component } from 'react';

import TimePicker from "./inputs/TimePicker";
import AudioUrlInput from "./inputs/AudioUrlInput";
import YouTubeInput from "./inputs/YouTubeInput";
import DurationPicker from "./inputs/DurationPicker";

import AudioPlayer from "./player/AudioPlayer";
import YouTubePlayer from "./player/YouTubePlayer";

import Tick from "./timeUtils/Tick.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DurationPicker />
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
