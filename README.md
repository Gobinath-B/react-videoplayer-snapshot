# Video Player Component

This React component allows you to display a video with basic controls and take snapshots of the video frames.

## Installation

To use this component in your React project, you can install it via npm or yarn:

```bash
npm install video-player-react

import React from 'react';
import VideoPlayer from 'video-player-react';

const App = () => {
  return (
    <div>
      <VideoPlayer src="path/to/your/video.mp4" />
    </div>
  );
};

export default App;


## Props
src: The URL or path to the video file to be played.
Snapshot
You can take a snapshot of the current frame of the video by clicking the "Take Snapshot" button.

## License
This component is licensed under the MIT License.