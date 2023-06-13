import React from 'react';
import './ProgressBar.scss';

function ProgressBar({ activeStory }) {
  return (
    <div className="progress-bar">
      {Array(10).fill().map((_, i) => (
        <div key={i} className={`progress-bar-item ${i <= activeStory ? 'active' : ''}`}></div>
      ))}
    </div>
  );
}

export default ProgressBar;
