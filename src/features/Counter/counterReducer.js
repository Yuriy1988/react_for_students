export default function reducer(state = { countValue: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        countValue: state.countValue + 1,
      };

    case 'DECREMENT':
      return {
        countValue: state.countValue - 1,
      };

    case 'INCREMENT_VALUE':
      return {
        countValue: state.countValue + action.payload,
      };

    default:
      return state;
  }
}
