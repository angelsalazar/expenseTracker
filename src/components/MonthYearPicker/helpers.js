export const OPEN = 'OPEN';
export const CLOSED = 'CLOSED';
export const SELECT_MONTH = 'SELECT_MONTH';
export const SELECT_YEAR = 'SELECT_YEAR';

export function reducer(state, action) {
  switch (action.type) {
    case OPEN: {
      return {
        ...state,
        open: true
      }
    }
    case CLOSED: {
      const newState = {
        ...state,
        open: false
      };

      if (!state.monthSelected || !state.yearSelected) {
        newState.val = {
          ...state.initialValue
        };
      } else {
        newState.initialValue = {
          ...state.val
        };
      }

      return {
        ...newState,
        yearSelected: false,
        monthSelected: false
      }
    }
    case SELECT_MONTH: {
      return {
        ...state,
        monthSelected: true,
        val: {
          ...state.val,
          month: action.payload
        }
      }
    }
    case SELECT_YEAR: {
      return {
        ...state,
        yearSelected: true,
        val: {
          ...state.val,
          year: action.payload
        }
      }
    }
  }
}

export const monthNamesByValue = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
};

export function generateRange(midPoint) {
  const items = [];

  for (let i = midPoint - 6; i < midPoint + 6; i++) {
    items.push({
      label: i,
      value: String(i)
    });
  }

  return items;
}
