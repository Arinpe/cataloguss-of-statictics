import movieTrailer from 'movie-trailer';

export const generateRandomNumber = (num) => Math.floor(Math.random() * num);

export const filterMovies = (data, param) => {
  const genreId = parseInt(param, 10);
  if (genreId === 0) return data;
  switch (genreId) {
    case 1:
      return data.slice(12);
    case 2:
      return data.slice(7, 12);
    case 3:
      return data.slice(0, 7);
    default:
      return data;
  }
};

export const getYoutubeVideoId = async (name) => {
  const url = await movieTrailer(name);
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get('v');
};
