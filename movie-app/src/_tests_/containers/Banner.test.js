import { Typography, Button } from '@material-ui/core';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount } from 'enzyme';
import { Banner } from '../../containers/Banner';

Enzyme.configure({ adapter: new Adapter() });

describe('Hero Section', () => {
  const hero = mount(<Banner updateMovie={jest.fn()} />);

  test('should render Banner', () => {
    expect(hero).toBeTruthy();
    expect(hero).not.toBeFalsy();
    expect(hero).toMatchSnapshot();
  });

  test('should have a movie title and description', () => {
    const movieDescription = hero.find(Typography);

    expect(movieDescription).toHaveLength(2);
    expect(movieDescription).not.toHaveLength(0);
  });

  test('should render play button', () => {
    const buttons = hero.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons).not.toHaveLength(0);
    expect(buttons.first().text()).toContain('Play');
    expect(buttons.first().text()).not.toContain('Another');
  });

  test('should render play button', () => {
    const buttons = hero.find(Button);

    expect(buttons).toHaveLength(2);
    expect(buttons).not.toHaveLength(0);
    expect(buttons.last().text()).toContain('');
  });
});
