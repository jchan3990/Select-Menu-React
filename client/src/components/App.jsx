import React, { useState, useEffect } from 'react';

import SelectMenu from './SelectMenu.jsx';
import { arrayData, objectData } from '../data/arrayData.js';

const App = () => {
  return (
    <div className="app">
      <label><b>Select your favorite anime:</b></label>
      <SelectMenu data={arrayData}/>
    </div>
  )
};

export default App;