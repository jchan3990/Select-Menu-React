import React, { useEffect, useRef, useState } from 'react';
import './SelectMenu.css';
import clsx from 'clsx';

import { useKeyOnly, useValueAndKey, useKeyOrValueAndKey } from '../utils/classNameBuilder';
import OptionsListObj from './OptionsListObj.jsx';
import OptionsListArr from './OptionsListArr.jsx';

const SelectMenu = (props) => {
  const { data, onChange, onClick, centered, disabled, floated, hidden, name, placeholder, size, striped, sub } = props;
  const [currData, setCurrData] = useState(data !== undefined ? data : [['No Data', 'NA']])

  let selectMenuClasses = clsx(
    'select-menu-container',
    useKeyOnly(centered, 'centered'),
    useValueAndKey(floated, 'floated'),
    useKeyOnly(disabled, 'disabled'),
    useValueAndKey(size, 'size'),
    useKeyOnly(hidden, 'hidden')
  )

  const optionsClasses = clsx(
    'menu-option',
    useValueAndKey(striped, 'striped'),
  )

  if (data === undefined) selectMenuClasses = 'select-menu-container small size disabled';

  const [search, setSearch] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [cursor, setCursor] = useState(-1);

  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setVisible(false);
    };
  };

  const clickOption = selected => {
    setSearch(selected);
    onClick(selected);
    setVisible(false);
  };

  const handleChange = e => {
    setSearch(e.target.value);
    if (Array.isArray(data[0])) {
      setCurrData(data.filter(d => d[0].toLowerCase().includes(e.target.value.toLowerCase())));
    } else {
      setCurrData(data.filter(d => d.value.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    setCursor(-1);
    onChange(e.target.value);
    setVisible(true);
  }

  const handleKeyboardNav = e => {
    if (e.keyCode === 40) {
      if (!isVisible) setVisible(!isVisible);
      if (cursor < currData.length - 1) {
        setCursor(cursor + 1);
        if (cursor !== -1) {
          if (Array.isArray(currData[cursor])) setSearch(currData[cursor][0]);
          else setSearch(currData[cursor].value)
        }
      } else {
        setCursor(cursor);
        if (Array.isArray(currData[cursor])) setSearch(currData[cursor][0]);
        else setSearch(currData[cursor].value)
      }
    }

    if (e.keyCode === 38) {
      if (cursor > 0) setCursor(cursor - 1);
      if (Array.isArray(currData[cursor])) setSearch(currData[cursor][0]);
      else setSearch(currData[cursor].value)
    }

    if (e.keyCode === 13) {
      if (Array.isArray(currData[0])) {
        setSearch(currData.filter(d => d[0].toLowerCase().includes(search.toLowerCase()))[0][0]);
        onClick(currData.filter(d => d[0].toLowerCase().includes(search.toLowerCase()))[0][0]);
        setVisible(false);
      } else {
        setSearch(currData.filter(d =>d.value.toLowerCase().includes(search.toLowerCase()))[0].value);
        onClick(currData.filter(d =>d.value.toLowerCase().includes(search.toLowerCase()))[0].value);
        setVisible(false);
      }
    }

    if (e.keyCode === 27) setVisible(false);
  }

  const downArrow = (
    <svg onClick={() => setVisible(!isVisible)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" fill="lightgrey" />
    </svg>
  );

  const upArrow = (
    <svg onClick={() => setVisible(!isVisible)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" fill="lightgrey" />
    </svg>
  );

  let showX = {visibility: search !== '' ? "visible" : "hidden"};

  const xBtn = (
    <svg style={showX} onClick={() => setSearch('')} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" fill="lightgrey"/></svg>
  );

  let optionMenu;
  if (Array.isArray(currData[0]) && isVisible) {
    optionMenu = (
      <div className="dropdown-menu-container">
        <OptionsListArr options={currData} level={1} onClick={clickOption} className={optionsClasses} />
      </div>
    )
  } else if (!Array.isArray(currData[0]) && isVisible) {
    optionMenu = (
      <div className="dropdown-menu-container">
        <OptionsListObj options={currData} level={1} onClick={clickOption} className={optionsClasses} sub={sub}/>
      </div>
    )
  }


  let arrow;
  isVisible ? arrow = upArrow : arrow = downArrow;

  return (
    <div className={selectMenuClasses} ref={wrapperRef}>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={search}
        tabIndex="0"
        onChange={handleChange}
        onClick={() => setVisible(!isVisible)}
        onKeyDown={e => handleKeyboardNav(e)}
      />
      <div className="buttons-container">
        {xBtn}
        <span className="separator"></span>
        {arrow}
      </div>
      {optionMenu}
    </div>
  )
};

export default SelectMenu;