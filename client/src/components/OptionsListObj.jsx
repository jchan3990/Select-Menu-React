import React from 'react';
import './OptionsList.css';

const OptionsListObj = ({ options, level, onClick, className, sub }) => {
  return (
    <>
      {options.map((option, idx) => (
        <div key={idx}>
          <div className='menu-option'>
            <span style={{marginLeft: "10px", fontFamily: "Arial"}} onClick={() => onClick(option.value)}>{option.value}</span>
            <img style={{marginRight: "10px"}} src={option.logo} alt={`${option.value}`} />
          </div>
          <div style={{position: 'relative', left: '25px'}}>
            {option[sub] !== undefined && option[sub].length > 0 ? (
              <OptionsListObj options={option[sub]} level={level + 1} onClick={onClick} sub={sub} />
            ) : (
              <></>
            )
            }
          </div>
        </div>
      ))}
    </>
  )
}

export default OptionsListObj;