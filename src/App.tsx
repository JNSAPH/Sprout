import React, { useState, useEffect } from 'react';
import "./App.css";
import animIdle from './assets/animations/idle/animIdle.mp4'
import animIdleMove from './assets/animations/idle/animIdleMove.mp4'

function App() {
  const [playAlternateVideo, setPlayAlternateVideo] = useState(false);

  useEffect(() => {
    // Set up an interval to toggle the video every 10 seconds (adjust as needed)
    const interval = setInterval(() => {
      setPlayAlternateVideo((prev) => !prev);
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" data-tauri-drag-region>
      <video autoPlay loop data-tauri-drag-region className="sproutBody">
        <source src={playAlternateVideo ? animIdleMove : animIdle} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
