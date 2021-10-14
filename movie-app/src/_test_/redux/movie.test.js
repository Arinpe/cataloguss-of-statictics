import { SET_MOVIE } from '../../actions/type';
import reducer from '../../reducers/movies';

describe('Movie Reducer', () => {
  test('Should return the default state', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual({});
    expect(state).not.toBeNull();
  });

  test('Should return the new state with appropriate type', () => {
    const payload = { name: 'test1', id: 2 };
    const state = reducer({}, { type: SET_MOVIE, payload });

    expect(state).not.toEqual({});
    expect(state).toEqual(payload);
  });
});
