import React from 'react';
import './OptionsList.css';

const OptionsListArr = ({ options, level, onClick, className }) => {
  return (
    <div className='options-container'>
      {options.map((option, idx) => (
        <div key={idx}>
          <div className='menu-option' onClick={() => onClick(option[0])}>
            <span style={{marginLeft: "10px", fontFamily: "Arial"}}>{option[0]}</span>
            <img style={{marginRight: "10px"}} src={option[1]} alt={`${option[1]}`} />
          </div>
          <div style={{position: 'relative', left: '25px'}}>
            {option[2] !== undefined && option[2].length > 0 ? (
              <OptionsListArr options={option[2]} level={level + 1} onClick={onClick} sub={sub} />
            ) : (
              <></>
            )
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default OptionsListArr;