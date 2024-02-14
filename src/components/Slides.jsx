import React from 'react';
import ContentSlider from './Review';

const Slides = () => {
  const slides = [
    <div>Slide 1 Content</div>,
    <div>Slide 2 Content</div>,
    <div>Slide 3 Content</div>,
  ];

  return (
    <div>
      <h1>React Content Slider</h1>
      <ContentSlider slides={slides} />
    </div>
  );
};

export default Slides;
