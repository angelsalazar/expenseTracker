import React from 'react';
import ItemSelect from './ItemSelect';

import { generateRange } from './helpers';

function Years({ value, onSelect }) {
  const options = React.useMemo(() => {
    return generateRange(new Date().getFullYear());
  }, [value]);

  function handleSelect(newYear) {
    onSelect && onSelect(newYear);
  }

  return (
    <ItemSelect
      value={String(value)}
      variant="ItemSelect-small"
      options={options}
      onSelect={handleSelect}
    />
  );
}

export default Years;
