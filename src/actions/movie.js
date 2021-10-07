import { SET_MOVIE } from './type';

export default (movie) => ({
  type: SET_MOVIE,
  payload: movie,
});
