import shallow from '../testSetup';
import NotFound from '../../components/NotFound';

describe('NOT Found PAge', () => {
  const page = shallow(NotFound);

  test('should render page', () => {
    expect(page).toBeTruthy();
    expect(page).not.toBeFalsy();
    expect(page).toMatchSnapshot();
  });

  test('should contain not found text', () => {
    const heading = page.find('h1');

    expect(heading.text()).toEqual('Page Not Found');
    expect(heading.text()).not.toBeNull();
  });
});
