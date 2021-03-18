import React, { useState, useEffect } from 'react';

import SelectMenu from './SelectMenu.jsx';

const data = [['Jiu Jitsu Kaisen', '../dist/images/jjk.jpeg'], ['One Piece', '../dist/images/onepiece.jpeg'], ['Naruto', '../dist/images/naruto.jpeg'], ['Attack on Titan', '../dist/images/AoT.jpeg'], ['Food Wars', '../dist/images/fw.jpeg'], ['Pokemon', '../dist/images/pikachu.jpeg'], ['My Hero Acadamia', '../dist/images/mha.jpeg']]

const App = () => {

  return (
    <div className="app">
      <SelectMenu data={data}/>
    </div>
  )
};

export default App;