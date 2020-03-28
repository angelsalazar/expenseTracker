import React from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import { CSSTransition } from 'react-transition-group';

import Button from '../Button';
import Months from './Months';
import Years from './Years';

import {
  monthNamesByValue,
  reducer,
  OPEN,
  CLOSED,
  SELECT_MONTH,
  SELECT_YEAR
} from './helpers';

import './style.css';


function MonthYearPicker({ value, onChange }) {
  const [{ val, open, monthSelected, yearSelected }, dispatch] = React.useReducer(reducer, {
    open: false,
    monthSelected: false,
    initialValue: value,
    val: value
  });
  const panelRef = React.useRef();

  React.useEffect(() => {
    if (monthSelected && yearSelected) {
      onChange && onChange(val);
      dispatch({ type: CLOSED });
    }
  }, [monthSelected, yearSelected])


  useOnclickOutside(panelRef, () => {
    dispatch({ type: CLOSED })
  })

  function handleMonthSelect(payload) {
    dispatch({ type: SELECT_MONTH, payload: Number(payload) });
  }

  function handleOpenPanel() {
    dispatch({ type: OPEN });
  }

  function handleClosePanel() {
    dispatch({ type: CLOSED });
  }

  function handleYearSelect(payload) {
    dispatch({ type: SELECT_YEAR, payload: Number(payload) })
  }

  return (
    <div className="MonthYearPicker">
      <Button
        className="MonthYearPicker__Trigger"
        onClick={handleOpenPanel}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <span>{monthNamesByValue[value.month]} {value.year}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </Button>
      <CSSTransition
        unmountOnExit
        in={open}
        timeout={300}
        classNames="MonthYearPicker__Panel">
        <div
          ref={panelRef}
          className="MonthYearPicker__Panel">
          <div className="MonthYearPicker__Panel__Content">
            <span className="MonthYearPicker__Panel__Display">
              {monthNamesByValue[val.month]} {val.year}
            </span>
            <Button
              className="MonthYearPicker__Panel__Close"
              onClick={handleClosePanel}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </Button>
            {
              monthSelected
              ? (
                <Years
                  value={val.year}
                  onSelect={handleYearSelect}
                />
              )
              : (
                <Months
                  value={val.month}
                  onSelect={handleMonthSelect}
                />
              )
            }
          </div>
        </div>
      </CSSTransition>
    </div>
  )
}

export default MonthYearPicker;
