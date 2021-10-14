import { FILTER_MOVIE } from './type';

export default (param) => ({
  type: FILTER_MOVIE,
  payload: param,
});
