import React from 'react';
import './ProgressBar.scss';

function ProgressBar({ activeStory }, { totalStories }) {
  return (
    <div className="progress-bar">
      {console.log(activeStory + " " + totalStories)}
      {Array(12)
      .fill()
      .map((_, i) => (
        <div key={i} className={`progress-bar-item ${i <= activeStory ? 'active' : ''}`}></div>
      ))}
    </div>
  );
}

export default ProgressBar;