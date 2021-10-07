import Filter from '../../components/Filter';
import shallowWrapper from '../testSetup';

describe('Filter Component', () => {
  const filterMock = jest.fn();

  const filterProps = {
    handleFilter: filterMock,
    genres: [8],
    allGenres: [{ name: 'genre1', id: 0 }, { name: 'genre2', id: 1 }],
  };

  const filter = shallowWrapper(Filter, filterProps);

  test('should render', () => {
    expect(filter).toBeTruthy();
    expect(filter).not.toBeNull();
    expect(filter).toMatchSnapshot();
  });

  test('should have select element with label', () => {
    const filterLabel = filter.find('label');
    const select = filter.find('select');
    const options = filter.find('option');
    expect(filterLabel.text()).toEqual('Genre:All');
    expect(filterLabel.text()).not.toEqual('');
    expect(select).toHaveLength(1);
    expect(select).not.toHaveLength(0);
    expect(options).toHaveLength(1);
    expect(options).not.toBeNull();
  });

  test('should call handle filter on selection change', () => {
    const select = filter.find('select');
    select.simulate('change', { target: { value: 'comedy' } });

    expect(filterMock).toHaveBeenCalled();
  });
});
