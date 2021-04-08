import React from 'react';

const OptionsList = ({ options }) => {
  return (
    <div className='options-container'>
      {options.map(option => (
        <div key={option.value} style={{positon: 'relative', display: 'flex', flexDirection: 'column', left: 25, height: 'fit-content', width: 'fit-content'}}>
          {option.value}
          <div style={{position: 'relative', left: 25}}>
            {option.subOptions.length > 0 &&
              <OptionsList options={option.subOptions} />
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default OptionsList;