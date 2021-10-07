import React from 'react';
import PropTypes from 'prop-types';

function Filter({ handleFilter, genres, allGenres }) {
  const genreOptions = [...genres].map((id) => (
    allGenres?.find((gen) => gen.id === id)
  )).filter((item) => item);
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center">
        <label htmlFor="categoryFilter" className="mr-3">
          Genre:
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
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Filter;
