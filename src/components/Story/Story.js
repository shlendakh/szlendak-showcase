import React from 'react';
import './Story.scss';

function Story({ activeStory, nextStory, previousStory }) {
  let xDown = null;                                                         

  const getTouches = (evt) => { 
    return evt.touches ||             
      evt.originalEvent.touches; 
  };                                                 

  const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
  };                                                

  const handleTouchMove = (evt) => {
    if ( ! xDown ) {
      return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let xDiff = xDown - xUp;

    if (Math.abs( xDiff ) > 0) {
      if ( xDiff > 0 ) {
        /* left swipe */ 
        nextStory();
      } else {
        /* right swipe */
        previousStory();
      }                       
    }
    /* reset values */
    xDown = null;                                             
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
    <div className={`story story-${activeStory}`} onClick={handleClick} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {/* Here you would render the content of the story based on activeStory */}
      <p>Story {activeStory}</p>
    </div>
  );
}

export default Story;