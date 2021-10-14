import { Button } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import setMovie from '../actions/movie';

export const MovieCard = ({
  imgUrl, handleTrailerClick, name, setMovie, id, overview, releaseDate, genres,
}) => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    setMovie({
      id, imgUrl, name, overview, releaseDate, genres,
    });
    history.push(`/${id}`);
  };

  return (
    <div className="movieCard">
      <div className="inner">
        <div className="front">
          <img src={imgUrl} alt="Movie Poster" />
        </div>
        <div className="back">
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={() => handleTrailerClick(name)}
          >
            Trailer
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            onClick={handleClick}
          >
            Details
          </Button>
        </div>
      </div>

    </div>
  );
};

MovieCard.defaultProps = {
  imgUrl: '',
};

MovieCard.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleTrailerClick: PropTypes.func.isRequired,
  setMovie: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setMovie: (obj) => dispatch(setMovie(obj)),
});
export default connect(null, mapDispatchToProps)(MovieCard);
