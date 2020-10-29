import SearchStore from "../Stores/SearchStore";

const searchAPI = function (query) {
  if (query === "") {
    SearchStore.dispatch("searchListSetter", []);
    return;
  }
  let apiKey = process.env.VUE_APP_URL;
  console.log(process.env)
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en_US&query=${query}`;
  fetch(url, {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then(function (data) {
      SearchStore.dispatch("searchListSetter", data.results);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { searchAPI };
