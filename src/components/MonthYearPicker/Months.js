import React from 'react';

import ItemSelect from './ItemSelect';
import { monthNamesByValue } from './helpers';

const options = (
  Object
    .keys(monthNamesByValue)
    .map((key) => {
      return {
        value: key,
        label: monthNamesByValue[key]
      }
    })
);

function Months({ value, onSelect }) {

  function handleSelect(newMonth) {
    onSelect && onSelect(newMonth);
  }

  return (
    <ItemSelect
      value={String(value)}
      options={options}
      onSelect={handleSelect}
    />
  );

}

export default Months;
