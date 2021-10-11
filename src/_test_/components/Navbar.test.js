import Navbar from '../../components/Navbar';
import shallowWrapper from '../testSetup';

describe('Navigation bar', () => {
  const nav = shallowWrapper(Navbar);

  test('should render Navbar', () => {
    expect(nav).toBeTruthy();
    expect(nav).not.toBeFalsy();
    expect(nav).toMatchSnapshot();
  });

  test('should have a logo', () => {
    const logo = nav.find('img');
    expect(logo).toHaveLength(1);
    expect(logo).not.toHaveLength(0);
    expect(logo.prop('src')).toEqual('logo.png');
    expect(logo.prop('src')).not.toBeNull();
  });
});
