import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieBanner from './Banner';
import MovieRow from './MovieRow';
import { urls } from '../helpers/constant';
import fetchData from '../helpers/request';
import setGenres from '../actions/genres';

const HomePage = ({ genres, setGenres }) => {
  useEffect(async () => {
    const fetchGenres = async () => {
      const { data: genres } = await fetchData.get(urls.genresUrl);
      return genres.genres;
    };
    const res = await fetchGenres();
    setGenres(res);
  }, []);
  return (
    <div>
      <MovieBanner />
      <MovieRow allGenres={genres} id="popularMovies" title="Popular Movies" moviesUrl={urls.moviePopular} />
      <MovieRow allGenres={genres} id="popularTv" title="Popular Tv Shows" moviesUrl={urls.popularTv} />
      <MovieRow allGenres={genres} id="topRatedMovies" title="Top Rated Movies" moviesUrl={urls.topRatedMovie} />
      <MovieRow allGenres={genres} id="topRatedTv" title="Top Rated Tv Shows" moviesUrl={urls.topRatedTv} />
      <MovieRow allGenres={genres} id="upcoming" title="Upcoming" moviesUrl={urls.upcoming} />
    </div>
  );
};

HomePage.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  setGenres: PropTypes.func.isRequired,
};

const mapStateToProps = ({ genres }) => ({
  genres,
});

const mapDispatchToProps = (dispatch) => ({
  setGenres: (genres) => dispatch(setGenres(genres)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
