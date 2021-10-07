import { Button } from '@material-ui/core';
import { MovieCard } from '../../containers/MovieCard';
import shallowWrapper from '../testSetup';

describe('Movie Card', () => {
  const movieInfo = {
    imgUrl: 'imageUrl',
    name: 'Test',
    handleTrailerClick: jest.fn(),
    setMovie: jest.fn(),
    id: 3,
    overview: 'Movie Description',
    releaseDate: '2020-12-10',
    genres: [1, 2, 3, 4],
  };

  const card = shallowWrapper(MovieCard, movieInfo);

  test('should render', () => {
    expect(card).toBeTruthy();
    expect(card).not.toBeFalsy();
    expect(card).toMatchSnapshot();
  });

  test('should have a image url', () => {
    const image = card.find('img');
    expect(image.prop('src')).toEqual(movieInfo.imgUrl);
    expect(image.prop('src')).not.toEqual('');
  });

  test('should render Trailer button', () => {
    const buttons = card.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons).not.toHaveLength(0);
    expect(buttons.first().text()).toContain('Trailer');
    expect(buttons.first().text()).not.toBeNull();
  });

  test('should render details button', () => {
    const buttons = card.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons.last().text()).toContain('Details');
    expect(buttons.last().text()).not.toBeNull();
  });
});
