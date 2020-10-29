import ActorStore from "../Stores/ActorStore";
import MoviesListStore from "../Stores/MoviesListStore";
import TvListStore from "../Stores/TvListStore";

const apiKey = process.env.VUE_APP_URL;
/**
 * This 3 to avoid calling the api again if it was called before
 */
const actorMap = new Map();
const moviesMap = new Map();
const tvMap = new Map();

const actor = function (id) {
  id = parseInt(id);
  console.log(id);

  if (actorMap.get(id)) {
    ActorStore.dispatch("actorSetter", actorMap.get(id));
    return;
  }
  let url = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      actorMap.set(id, data);
      ActorStore.dispatch("actorSetter", data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
const getMoviesList = function (id) {
  id = parseInt(id);
  if (moviesMap.get(id)) {
    MoviesListStore.dispatch("moviesListSetter", moviesMap.get(id));
    return;
  }
  let url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=en-US`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      moviesMap.set(id, data.cast);
      MoviesListStore.dispatch("moviesListSetter", data.cast);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getshowtvList = function (id) {
  id = parseInt(id);
  if (tvMap.get(id)) {
    TvListStore.dispatch("showtvListSetter", tvMap.get(id));
    return;
  }
  let url = `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=${apiKey}&language=en-US`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      tvMap.set(id, data.cast);
      TvListStore.dispatch("showtvListSetter", data.cast);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { actor, getMoviesList, getshowtvList };
