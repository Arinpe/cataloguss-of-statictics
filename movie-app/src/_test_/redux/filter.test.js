import { FILTER_MOVIE } from '../../actions/type';
import reducer from '../../reducers/filter';

describe('Movie Reducer', () => {
  test('Should return the default state', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual(0);
  });

  test('Should return the new state with appropriate type', () => {
    const payload = '2';
    const state = reducer({}, { type: FILTER_MOVIE, payload });

    expect(state).not.toEqual({});
    expect(state).toEqual(payload);
  });
});
