/*
 * Imports
 */

import React, { useState } from 'react';
import './App.scss';
import Story from './components/Story/Story';
import ProgressBar from './components//ProgressBar/ProgressBar';

/*
 * App React component
 *
 * Render ProgressBar Component on the top of screen
 * Render Story Component with content
 * Both callback funtions are to handle navigation
 */

function App() {

  // State and number of all Story tiles 
  const [activeStory, setActiveStory] = useState(0);
  const totalStories = 12; // (if you change it, you have to also change Array(12).fill in ProgressBar component) -> to fix in the future

  // Callback funtion to handle change to next Story tile
  const nextStory = () => {
    if (activeStory < totalStories - 1) {
      setActiveStory((prevActiveStory) => prevActiveStory + 1);
    }
  };

  // Callback funtion to handle change to previous Story tile
  const previousStory = () => {
    if (activeStory > 0) {
      setActiveStory((prevActiveStory) => prevActiveStory - 1);
    }
  };

  return (
    <div>
      <div className="app">
        <ProgressBar activeStory={activeStory} />
        <Story activeStory={activeStory} nextStory={nextStory} previousStory={previousStory} />
      </div>
    </div>
  );
}

export default App;