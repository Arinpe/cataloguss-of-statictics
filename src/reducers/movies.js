import { SET_MOVIE } from '../actions/type';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SET_MOVIE:
      return payload;
    default:
      return state;
  }
};
