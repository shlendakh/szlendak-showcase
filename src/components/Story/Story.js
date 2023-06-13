import React, { useState } from 'react';
import './Story.scss';

function Story({ activeStory, nextStory, previousStory }) {
  const [startPos, setStartPos] = useState(null);

  const handleStart = (e) => {
    setStartPos(e.clientX || e.touches[0].clientX);
  };

  const handleMove = (e) => {
    if (startPos === null) return;  // Only proceed if a swipe/drag started
    const currentPos = e.clientX || e.touches[0].clientX;
    const diff = startPos - currentPos;

    if (Math.abs(diff) > 0) {
      if (diff < 0) {
        /* left swipe/drag */
        previousStory();
      } else {
        /* right swipe/drag */
        nextStory();
      }
       setStartPos(null);  // Reset start position after swipe/drag
    }
  };

  const handleClick = (e) => {
    const { clientX } = e;
    const { innerWidth } = window;

    if (clientX < innerWidth / 2) {
      previousStory();
    } else {
      nextStory();
    }
  };

  return (
    <div 
      className={`story story-${activeStory}`} 
      onClick={handleClick}
      onMouseDown={handleStart}

      onTouchStart={handleStart}
      onTouchMove={handleMove}
    >
      <p>Story {activeStory}</p>
    </div>
  );
}

export default Story;