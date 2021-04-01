import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import './App.css';

// import SelectMenu from 'single-select-react-jc';
import SelectMenu from './SelectMenu.jsx';
import { animeArray, animeObject, carsArray, hotelsObject } from '../data/sampleData.js';

const App = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(`https://private-anon-6a5be50f2b-carsapi1.apiary-mock.com/manufacturers`)
      .then(response => {
        response.json()
        .then(data => {
          let newOptions = [];
          data.forEach(d => {
            let tmp = [];
            tmp.push(d.name, d.img_url);
            newOptions.push(tmp);
          })

          setOptions(newOptions);
        })
      })
  }, [])

  const onChange = (change) => {
    console.log(change);
  }

  return (
    <div className="app">
      {options.length > 0 &&
        <SelectMenu
          data={options}
          onChange={onChange}
          centered
          size="small"
          disabled
        />
      }
    </div>
  )
};

export default App;