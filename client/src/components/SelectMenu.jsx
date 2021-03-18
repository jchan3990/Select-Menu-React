import React, { useEffect, useRef, useState } from 'react';

const SelectMenu = ({ data }) => {
  const [search, setSearch] = useState('');
  const [isVisible, setVisible] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const downArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" fill="lightgrey" />
    </svg>
  );

  const upArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" fill="lightgrey" />
    </svg>
  );

  const resetSearch = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
    </svg>
  );

  let arrow;
  isVisible ? arrow = upArrow : arrow = downArrow;

  let showX = {display: search !== '' ? "inline" : "none"};

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setVisible(false);
    };
  };

  const clickOption = selected => {
    setSearch(selected);
    setVisible(false);
  };

  return (
    <div className="select-menu-container" ref={wrapperRef}>
      <input
        type="text"
        name="search"
        placeholder="Select..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setVisible(true);
        }}
        onClick={() => setVisible(!isVisible)}
      />
      <button style={showX} className="clear-search-btn" onClick={() => setSearch('')}>X</button>
      <div className="arrow-icon-container" onClick={() => setVisible(!isVisible)}>
        {arrow}
      </div>
      {isVisible &&
        <div className="dropdown-menu-container">
          {data.filter(option => option[0].toLowerCase().includes(search.toLowerCase()))
            .map((match, i) => (
              <div className="menu-option" key={i} onClick={() => clickOption(match[0])}>
                <span style={{marginLeft: "10px"}} key={i}>{match[0]} </span>
                <img style={{marginRight: "10px"}} src={match[1]} alt={`${match[0]}`} />
              </div>
            ))}
        </div>
      }
    </div>
  )
};

export default SelectMenu;