<template>
  <div class="actor">
    <div class="img-wrapper">
      <img v-bind:src="imgUrl + (actor.poster_path || actor.profile_path)" />
    </div>
    <div class="info-wrapper">
      <h1>{{ actor.name }}</h1>
      <div>{{ actor.biography }}</div>
    </div>
    <div v-if="movieList_length">
      <h2>Movie List</h2>
      <MovieSimilar :data="movieList" />
    </div>
    <!-- <div v-if="showtvList_length">
      <h2>TV List</h2>
      <MovieSimilar :data="showtvList" />
    </div> -->
  </div>
</template>

<script>
// import Cast from "./Cast";
import MovieSimilar from "./MovieSimilar";
import ActorStore from "../Stores/ActorStore";
import TvListStore from "../Stores/TvListStore";
import MoviesListStore from "../Stores/MoviesListStore";
import { actor, getMoviesList, getshowtvList } from "../Services/ActorService";

export default {
  components: {
    MovieSimilar,
  },
  name: "Actor",
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/",
    };
  },
  computed: {
    actor() {
      return ActorStore.state.actor;
    },
    showtvList() {
      return TvListStore.state.showtvList;
    },
    movieList() {
      return MoviesListStore.state.moviesList;
    },
    showtvList_length() {
      return TvListStore.state.showtvList.length > 0;
    },
    movieList_length() {
      return MoviesListStore.state.moviesList.length > 0;
    },
  },
  beforeCreate() {
    actor(this.$route.params.id);
    getMoviesList(this.$route.params.id);
    getshowtvList(this.$route.params.id);
  },
  watch: {
    $route(newValue, oldValue) {
      actor(this.$route.params.id);
      getMoviesList(this.$route.params.id);
      getshowtvList(this.$route.params.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.actor {
  padding-top: 20px;
  padding-left: 10px;

  .info-wrapper {
    p {
      text-align: justify;
      margin: 10px 10px 10px 0;
      max-width: 600px;
    }
  }
}
</style>
