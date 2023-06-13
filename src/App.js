import React, { useState } from 'react';
import './App.scss';
import Story from './components/Story/Story';


function App() {
  const [activeStory, setActiveStory] = useState(0);
  const totalStories = 10;

  const nextStory = () => {
    if (activeStory < totalStories - 1) {
      setActiveStory((prevActiveStory) => prevActiveStory + 1);
    }
  };

  const previousStory = () => {
    if (activeStory > 0) {
      setActiveStory((prevActiveStory) => prevActiveStory - 1);
    }
  };

  return (
    <div className="app">
      <Story activeStory={activeStory} nextStory={nextStory} previousStory={previousStory} />
    </div>
  );
}

export default App;