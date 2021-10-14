import { GET_GENRES } from '../actions/type';

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_GENRES:
      return payload;
    default:
      return state;
  }
};
