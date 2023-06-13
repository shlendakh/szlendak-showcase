import React, { useState } from 'react';
import './Story.scss';

function Story({ activeStory, nextStory, previousStory}) {
  const [startPos, setStartPos] = useState(null);

  const handleTouchStart = (e) => {
    setStartPos(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startPos === null) return;
    const currentPos = e.touches[0].clientX;
    const diff = startPos - currentPos;

    if (Math.abs(diff) > 50) {  // You can adjust this value to change the sensitivity
      if (diff > 0) {
        nextStory();
      } else {
        previousStory();
      }
      setStartPos(null);
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <p>Story {activeStory}</p>
    </div>
  );
}

export default Story;
