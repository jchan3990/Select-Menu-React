import React from 'react';
// import './OptionsList.css';

const OptionsListObj = ({ options, level, onClick, className }) => {
  return (
    <div className='options-container'>
      {options.map((option, idx) => (
        <div key={idx}>
          <div className='menu-option'>
            <span style={{marginLeft: "10px", fontFamily: "Arial"}} onClick={() => onClick(option.value)}>{option.value}</span>
            <img style={{marginRight: "10px"}} src={option.logo} alt={`${option.value}`} />
          </div>
          <div style={{position: 'relative', left: '25px'}}>
            {option.subOptions !== undefined && option.subOptions.length > 0 ? (
              <OptionsListObj options={option.subOptions} level={level + 1} onClick={onClick}/>
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

export default OptionsListObj;