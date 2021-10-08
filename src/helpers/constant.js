import runtimeEnv from '@mars/heroku-js-runtime-env';

export const imageBaseUrl = 'https://image.tmdb.org/t/p/original';
const env = runtimeEnv();

const { REACT_APP_TMBD_API_KEY } = env;
export const urls = {
  originals: `/discover/tv?api_key=${REACT_APP_TMBD_API_KEY}&with_networks=213`,
  moviePopular: `/movie/popular?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`,
  topRatedMovie: `/movie/top_rated?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`,
  upcoming: `/movie/upcoming?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`,
  popularTv: `/tv/popular?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`,
  topRatedTv: `/tv/top_rated?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`,
  genresUrl: `/genre/movie/list?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US`,
};

export const youtubeOptions = {
  height: '450',
  width: '100%',
  autoplay: 1,
};
