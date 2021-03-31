import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import './App.css';

import SelectMenu from 'single-select-react-jc';
import { animeArray, animeObject, carsArray, hotelsObject } from '../data/sampleData.js';

const App = () => {
  return (
    <div className="app">
      <SelectMenu data={hotelsObject}/>
    </div>
  )
};

export default App;