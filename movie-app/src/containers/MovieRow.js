import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import Youtube from 'react-youtube';
import PropTypes from 'prop-types';
import Card from './MovieCard';
import Filter from '../components/Filter';
import fetch from '../helpers/request';
import { imageBaseUrl, youtubeOptions } from '../helpers/constant';
import { filterMovies, getYoutubeVideoId } from '../helpers/common';
import filterAction from '../actions/filter';

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    padding: '0 !important',
  },
  container: {
    flexWrap: 'nowrap',
    'overflow-x': 'scroll',
    padding: theme.spacing(2, 0),
  },
  heading: {
    padding: '15px 0',
  },
}));
function MovieRow({
  title, moviesUrl, filterParam, moviesFilter, id, allGenres,
}) {
  const classes = useStyles();
  const [movies, setMovies] = useState(null);
  const parentSectionId = useRef('');
  const [genres, setGenres] = useState([]);
  const [trailerId, setTrailerId] = useState('');
  useEffect(async () => {
    const fetchMovies = async () => {
      const { data: { results } } = await fetch.get(moviesUrl);

      return results.map((movie) => ({
        id: movie.id,
        imageUrl: imageBaseUrl + movie.poster_path,
        genreIds: movie.genre_ids,
        name: movie.title || movie.name,
        overview: movie.overview,
        releaseDate: movie.first_air_date || movie.release_date,
      }));
    };

    try {
      const data = await fetchMovies();
      setMovies(data);
      const flattedGenresArr = data.map(({ genreIds }) => (genreIds)).flat();
      const uniqGenres = new Set(flattedGenresArr);
      setGenres([...uniqGenres]);
      return true;
    } catch {
      return null;
    }
  }, []);

  const setMoviesToDisplay = () => {
    if (parentSectionId.current === id) {
      return filterMovies(movies, filterParam);
    }
    return movies;
  };

  const handleFilter = (e) => {
    const section = e.target.closest('section');
    if (id === section.id) {
      moviesFilter(e.target.value);
      parentSectionId.current = section.id;
    }
  };

  const handleTrailerClick = async (name) => {
    if (trailerId) {
      setTrailerId('');
    } else {
      try {
        const id = await getYoutubeVideoId(name);
        setTrailerId(id);
      } catch {
        return null;
      }
    }
    return true;
  };
  const allMovies = filterParam.toString() === '0' ? movies : setMoviesToDisplay();
  return (
    <div className="container">
      <section id={id}>
        <Grid className={classes.heading} container justifyContent="space-between" alignItems="center">
          <Grid item>
            <h5 className="section__heading">{title}</h5>
          </Grid>
          <Grid item>
            <Filter
              allGenres={allGenres}
              handleFilter={handleFilter}
              genres={genres}
            />
          </Grid>
        </Grid>
        <Grid className={`${classes.container} scrollbar`} container spacing={3}>
          {allMovies?.map(({
            id, imageUrl, name, overview, releaseDate, genreIds,
          }) => (
            <Grid className={classes.itemRoot} item key={id}>
              <Card
                id={id}
                name={name}
                handleTrailerClick={handleTrailerClick}
                imgUrl={imageUrl}
                desc={overview}
                releaseDate={releaseDate}
                genres={genreIds}
                overview={overview}
              />
            </Grid>
          ))}
        </Grid>
      </section>
      {trailerId && <Youtube videoId={trailerId} opts={youtubeOptions} />}
    </div>
  );
}

MovieRow.propTypes = {
  title: PropTypes.string.isRequired,
  moviesUrl: PropTypes.string.isRequired,
  filterParam: PropTypes.number.isRequired,
  moviesFilter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  filterParam: parseInt(state.filter, 10),
});

const mapDispatchToProps = (dispatch) => ({
  moviesFilter: (param) => dispatch(filterAction(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieRow);
