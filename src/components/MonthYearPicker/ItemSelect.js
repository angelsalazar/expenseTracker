import React from 'react';
import clsx from 'clsx';

import './ItemSelect.css';

function ItemSelect({ variant, value, options, onSelect }) {
  function handleClick(ev) {
    onSelect && onSelect(ev.target.dataset.value);
  }
  return (
    <div className={clsx('ItemSelect', variant)}>
      {options.map((opt) => (
        <div
          key={opt.value}
          data-value={opt.value}
          className={clsx('ItemSelect__Option', value === opt.value && 'ItemSelect__Option-selected')}
          onClick={handleClick}>
          {opt.label}
        </div>
      ))}
    </div>
  )
}

export default ItemSelect;
