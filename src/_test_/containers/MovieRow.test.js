/* eslint-disable react/jsx-props-no-spreading */
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Enzyme, { mount } from 'enzyme';
import Row from '../../containers/MovieRow';

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({
  filter: 0,
  genre: [{ name: 'All', id: 0 }],
});

describe.only('Movie Row', () => {
  const rowInfo = {
    title: 'Test',
    moviesUrl: 'moviesurl',
    id: 'movieId',
    allGenres: [{ name: 'All', id: 0 }, { name: 'Horror', id: 12 }],
  };

  const row = mount(
    <Provider store={store}>
      <Row {...rowInfo} />
    </Provider>,
  );

  test('should render Movie Row', () => {
    expect(row).toBeTruthy();
    expect(row).not.toBeFalsy();
    expect(row).toMatchSnapshot();
  });

  test('should have a title', () => {
    const movieDescription = row.find('.section__heading');

    expect(movieDescription).toHaveLength(1);
    expect(movieDescription).not.toHaveLength(0);
    expect(movieDescription.text()).toEqual(rowInfo.title);
    expect(movieDescription.text()).not.toEqual('');
  });
});
