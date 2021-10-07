import { GET_GENRES } from '../../actions/type';
import reducer from '../../reducers/genre';

describe('Movie Reducer', () => {
  test('Should return the default state', () => {
    const state = reducer(undefined, {});

    expect(state).toEqual([]);
    expect(state).not.toBeNull();
  });

  test('Should return the new state with appropriate type', () => {
    const payload = [1, 3, 5];
    const state = reducer({}, { type: GET_GENRES, payload });

    expect(state).not.toEqual({});
    expect(state).toEqual(payload);
  });
});
