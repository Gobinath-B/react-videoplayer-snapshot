import React, { useRef } from 'react';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  const handleTakeSnapshot = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/png');

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = dataURL;
    anchor.download = 'snapshot.png';

    // Trigger a click event on the anchor to initiate download
    anchor.click();
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleTakeSnapshot}>Take Snapshot</button>
    </div>
  );
};

export default VideoPlayer;
