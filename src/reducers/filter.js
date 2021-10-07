import { FILTER_MOVIE } from '../actions/type';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case FILTER_MOVIE:
      return payload;
    default:
      return state;
  }
};
