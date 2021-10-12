import React from 'react';
import PropTypes from 'prop-types';

function Filter({ handleFilter }) {
  const genres = [0, 1, 2, 3];
  const allGenres = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Less Unpopular',
    },
    {
      id: 2,
      name: 'Popular',
    },
    {
      id: 3,
      name: 'Most Popular',
    },
  ];
  const genreOptions = [...genres].map((id) => (
    allGenres?.find((gen) => gen.id === id)
  )).filter((item) => item);
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center">
        <label htmlFor="categoryFilter" className="mr-3">
          Popularity:
          <select className="form-control" name="categoryFilter" id="categoryFilter" onChange={handleFilter}>
            {[{ name: 'All', id: 0 }, ...genreOptions].map(({ name, id }) => <option value={id} key={id}>{name}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
