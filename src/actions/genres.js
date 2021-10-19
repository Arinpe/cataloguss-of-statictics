import { GET_GENRES } from './type';

export default (genres) => ({
  type: GET_GENRES,
  payload: genres,
});
