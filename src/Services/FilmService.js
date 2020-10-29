import FilmStore from "../Stores/FilmStore";
import MovieSimilarStore from "../Stores/MovieSimilarStore";
import CastStore from "../Stores/CastStore";

const apiKey = process.env.VUE_APP_URL;
/**
 * This 3 to avoid calling the api again if it was called before
 */
const filmMap = new Map();
const castMap = new Map();
const movieSimilar = new Map();

const film = function (id) {
  id = parseInt(id);
  console.log(id)

  if (filmMap.get(id)) {
    FilmStore.dispatch("filmSetter", filmMap.get(id));
    return;
  }
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      filmMap.set(id, data);
      FilmStore.dispatch("filmSetter", data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const getCast = function (id) {
  id = parseInt(id);
  if (castMap.get(id)) {
    CastStore.dispatch("castSetter", castMap.get(id));
    return;
  }
  let url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      castMap.set(id, data.cast);
      CastStore.dispatch("castSetter", data.cast);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getMovieSimilar = function (id) {
  id = parseInt(id);
  if (movieSimilar.get(id)) {
    MovieSimilarStore.dispatch("movieSimilarSetter", movieSimilar.get(id));
    return;
  }
  let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      movieSimilar.set(id, data.results);
      MovieSimilarStore.dispatch("movieSimilarSetter", data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { film, getCast, getMovieSimilar };
