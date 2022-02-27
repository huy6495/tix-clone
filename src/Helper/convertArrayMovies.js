export const convertArrayMovie = (list) => {
  const newArrayMovies = [];
  list.map((movie) => {
    newArrayMovies.push({ maPhim: movie.id, tenPhim: movie.tenPhim });
  });
  return newArrayMovies;
};
