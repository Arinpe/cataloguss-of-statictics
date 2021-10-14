import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import {
  makeStyles, Grid, Typography, Button,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { generateRandomNumber, getYoutubeVideoId } from '../helpers/common';
import { urls, imageBaseUrl, youtubeOptions } from '../helpers/constant';
import fetch from '../helpers/request';
import setMovie from '../actions/movie';

export const Banner = ({ updateMovie }) => {
  const [movie, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState('');
  const history = useHistory();
  useEffect(async () => {
    const fetchMovies = async () => {
      const {
        data: { results },
      } = await fetch.get(urls.originals);
      const index = generateRandomNumber(results.length);

      return results[index];
    };
    try {
      const data = await fetchMovies();
      setMovie(data);
    } catch {
      return null;
    }
    return false;
  }, []);

  const handleClick = () => {
    const bannerMovie = {
      name: movie.name,
      genres: movie.genre_ids,
      releaseDate: movie.first_air_date,
      overview: movie.overview,
      imgUrl: imageBaseUrl + movie.poster_path,
      id: movie.id,
    };
    updateMovie(bannerMovie);
    history.push(`/${movie.id}`);
  };

  let bgLink = '';
  if (imageBaseUrl && movie) {
    bgLink = `url('${imageBaseUrl + movie?.backdrop_path}') no-repeat center`;
  }

  const styles = makeStyles((theme) => ({
    bg: {
      background: bgLink,
      backgroundSize: 'cover',
      width: '100%',
      height: '600px',
      paddingTop: theme.spacing(6),
    },
    content: {
      height: '100%',
      paddingLeft: '30px',
      color: 'white',
    },
    btnContainer: {
      marginTop: '20px',
    },
    btn: {
      marginRight: '10px',
      background: 'white',
    },
  }));

  const handleTrailerClick = async () => {
    if (trailerId) {
      setTrailerId('');
    } else {
      try {
        const id = await getYoutubeVideoId(movie.name);
        setTrailerId(id);
      } catch {
        return null;
      }
    }
    return null;
  };

  const classes = styles();
  return trailerId ? (
    <Youtube videoId={trailerId} opts={youtubeOptions} />
  ) : (
    <div className={classes.bg}>
      <Grid container alignItems="center" className={classes.content}>
        <Grid item xs={10} md={5} lg={4}>
          <Typography variant="h4" className={classes.heading}>
            {movie?.name}
          </Typography>
          <Typography variant="body2">{movie?.overview}</Typography>
          <div className={classes.btnContainer}>
            <Button
              className={classes.btn}
              variant="outlined"
              size="large"
              color="secondary"
              onClick={handleTrailerClick}
            >
              Play
            </Button>
            <Button
              className={classes.btn}
              variant="outlined"
              size="large"
              color="secondary"
              onClick={handleClick}
            >
              Details
            </Button>
          </div>
        </Grid>
      </Grid>
      {trailerId && <Youtube videoId={trailerId} opts={youtubeOptions} />}
    </div>
  );
};

Banner.propTypes = {
  updateMovie: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateMovie: (obj) => dispatch(setMovie(obj)),
});

export default connect(null, mapDispatchToProps)(Banner);
