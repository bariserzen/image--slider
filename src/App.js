import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


const  App = () => {
  return (
    <ImageSlider slides={SliderData}/>

  );
};

export default App;
