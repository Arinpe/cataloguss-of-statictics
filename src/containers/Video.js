import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Youtube from 'react-youtube';
import { format } from 'date-fns';
import { getYoutubeVideoId } from '../helpers/common';

export const Video = ({ movie, allGenres }) => {
  const history = useHistory();
  if (!movie || !Object.keys(movie).length) {
    history.push('/');
  }
  const [trailerId, setTrailerId] = useState('null');
  const {
    name, imgUrl, overview, releaseDate, genres,
  } = movie;

  useEffect(async () => {
    try {
      const videoId = await getYoutubeVideoId(name);
      setTrailerId(videoId);
    } catch {
      return null;
    }
    return false;
  });

  const genresArr = genres?.map((id) => (
    allGenres?.find((gen) => gen.id === id)
  )).filter((item) => item);

  const opts = {
    height: '500px',
    width: '100%',
    autoplay: 1,
  };

  return (
    <div className="video">
      <div className="video__wrapper">
        <div className="d-flex video__header">
          <h2>{name}</h2>
          <span>
            (
            {releaseDate?.split('-')[0]}
            )
          </span>
        </div>
        <div className="video__content">
          <div className="d-flex video__media">
            <div className="video__poster">
              <img src={imgUrl} alt="Movie Poster" />
            </div>
            <div className="video__trailer">
              {trailerId && <Youtube videoId={trailerId} opts={opts} />}
            </div>
          </div>
        </div>
        <div className="video__description">
          <p>{overview}</p>
        </div>
        <div className="video__footer">
          <div>
            <p>Release date</p>
            <p>{releaseDate && format(new Date(releaseDate), 'd LLLL yyyy')}</p>
          </div>
          <ul className="video__genres">
            {genresArr?.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
  movie: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  allGenres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = ({ movie, genres }) => ({
  movie,
  allGenres: genres,
});

export default connect(mapStateToProps)(Video);
