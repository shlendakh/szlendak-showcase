/*
 * Imports
 */

import React from 'react';
import './ProgressBar.scss';

/*
 * ProgressBar React component
 *
 * It takes activeStory as prop and generate array of lines. All actual and ealier story lines are marked as 'active' for proper styling
 * (to fix - change Array(12).fill for dynamic progress bar length - now if you change quantity of stories slides you have to change it manualy)
 */

function ProgressBar({ activeStory }) {
  return (
    <div className="progress-bar">
      {Array(12)
      .fill()
      .map((_, i) => (
        <div key={i} className={`progress-bar-item ${i <= activeStory ? 'active' : ''}`}></div>
      ))}
    </div>
  );
}

export default ProgressBar;