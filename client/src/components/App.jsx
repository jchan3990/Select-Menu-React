import React, { useState, useEffect } from 'react';

import SelectMenu from './SelectMenu.jsx';
import { arrayData, objectData } from '../data/arrayData.js';

const App = () => {
  return (
    <div className="app">
      <SelectMenu data={objectData}/>
    </div>
  )
};

export default App;