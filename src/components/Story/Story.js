import React, { useState } from 'react';
import DOMPurify from 'dompurify';
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

  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <div 
      className={`story story-${activeStory}`}
      id={`story-${activeStory}`} 
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      dangerouslySetInnerHTML={createMarkup(stories[activeStory].content)}
    >
    </div>
  );
}

const stories = [
  {
    id: 1,
    title: "Test",
    content: `
      <h2>poznajmy się</h2>
      <h1>Szlendak x Tukan</h1>
      <div class="content">
        <h3>kilka słów o mnie</h3>
        <p>kliknij lub przesuń (jak na Insta) <i class="fa-solid fa-arrow-right"></i></p>
      </div>
    `
  },
  {
    id: 2,
    title: "Test",
    content: `
      <h2>poznajmy się</h2>
      <h1>Szlendak x Tukan</h1>
      <div class="content">
        <h3>kilka słów o mnie</h3>
        <p>kliknij lub przesuń (jak na Insta) <i class="fa-solid fa-arrow-right"></i></p>
      </div>
    `
  },
  {
    id: 3,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 4,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 5,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 6,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 7,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 8,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 9,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
  {
    id: 10,
    title: "Test",
    content: `
      <p>Szlendak x Tukan</p>
    `
  },
];

export default Story;