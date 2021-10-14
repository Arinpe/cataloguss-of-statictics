/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow } from 'enzyme';
import HomePage from '../../containers/homepage';

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe('Home page', () => {
  const opts = {
    genres: [[{ name: test, id: 90 }]],
    setGenres: jest.fn(),
  };

  const page = shallow(
    <Provider store={store}>
      <HomePage {...opts} />
    </Provider>,
  );

  test('should render home page', () => {
    expect(page).toBeTruthy();
    expect(page).not.toBeFalsy();
    expect(page).toMatchSnapshot();
  });
});
