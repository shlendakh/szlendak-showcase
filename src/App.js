import React from 'react';
import Story from './components/Story/Story';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  const [activeStory, setActiveStory] = React.useState(0);

  const nextStory = () => {
    setActiveStory((prevActiveStory) => prevActiveStory + 1);
  };

  const previousStory = () => {
    setActiveStory((prevActiveStory) => prevActiveStory - 1);
  };

  return (
    <div className="app">
      <ProgressBar activeStory={activeStory} />
      <Story activeStory={activeStory} nextStory={nextStory} previousStory={previousStory} />
    </div>
  );
}

export default App;