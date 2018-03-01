import { INCREMENT, DECREMENT } from './types';

export default function reducer(state = { countValue: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        countValue: state.countValue + 1,
      };

    case DECREMENT:
      return {
        countValue: state.countValue - 1,
      };

    default:
      return state;
  }
}
