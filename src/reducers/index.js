import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filterReducer from './filter';
import genreReducer from './genre';

export default combineReducers({
  movie: moviesReducer,
  filter: filterReducer,
  genres: genreReducer,
});
