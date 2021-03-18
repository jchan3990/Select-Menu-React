import React, { useState, useEffect } from 'react';

import SelectMenu from './SelectMenu.jsx';
import { animeArray, animeObject, carsArray } from '../data/sampleData.js';

const App = () => {
  return (
    <div className="app">
      {/* <label><b>Select your favorite anime:</b></label> */}
      <SelectMenu data={carsArray}/>
    </div>
  )
};

export default App;