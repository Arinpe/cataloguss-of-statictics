import filterAction from '../../actions/filter';
import genreAction from '../../actions/genres';
import movieAction from '../../actions/movie';
import { FILTER_MOVIE, GET_GENRES, SET_MOVIE } from '../../actions/type';

describe('Filter Action', () => {
  test('should generate a filter action', () => {
    const id = 10;
    const actionObj = filterAction(id);

    expect(actionObj).toEqual({
      type: FILTER_MOVIE,
      payload: id,
    });
    expect(actionObj).not.toEqual({});
  });
});

describe('Genre Action', () => {
  test('should create action for genres', () => {
    const genres = [1, 2, 3, 4, 5];
    const genreObj = genreAction(genres);

    expect(genreObj).toEqual({
      type: GET_GENRES,
      payload: genres,
    });
    expect(genreObj).not.toEqual([]);
  });
});

describe('Movie Action', () => {
  test('should create action to set a movie', () => {
    const movie = { id: 1, name: 'test movie' };
    const genreObj = movieAction(movie);

    expect(genreObj).toEqual({
      type: SET_MOVIE,
      payload: movie,
    });
    expect(genreObj).not.toEqual([]);
  });
});
