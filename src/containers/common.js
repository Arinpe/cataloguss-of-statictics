import movieTrailer from 'movie-trailer';

export const generateRandomNumber = (num) => Math.floor(Math.random() * num);

export const filterMovies = (data, param) => {
  const genreId = parseInt(param, 10);
  if (genreId === 0) return data;
  return data.filter(({ genreIds }) => genreIds.includes(genreId));
};

export const getYoutubeVideoId = async (name) => {
  const url = await movieTrailer(name);
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get('v');
};
