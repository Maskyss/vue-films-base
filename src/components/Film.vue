<template>
  <div class="film">
    <div class="img-wrapper">
      <img v-bind:src="imgUrl + (film.poster_path || film.profile_path)" />
    </div>
    <div class="info-wrapper">
      <h1>{{ film.original_title }}</h1>
      <div>{{ film.overview }}</div>
    </div>
    <h3>Similar movies</h3>
    <MovieSimilar :data="movieSimilar" />
    <Cast :data="cast" />
  </div>
</template>

<script>
import Cast from "./Cast";
import MovieSimilar from "./MovieSimilar";
import FilmStore from "../Stores/FilmStore";
import MovieCreditsStore from "../Stores/MovieSimilarStore";
import CastStore from "../Stores/CastStore";
import { film, getCast, getMovieSimilar } from "../Services/FilmService";

export default {
  components: {
    Cast,
    MovieSimilar,
  },
  name: "Film",
  data() {
    return {
      imgUrl: "https://image.tmdb.org/t/p/w300_and_h450_bestv2/",
    };
  },
  computed: {
    film() {
      return FilmStore.state.film;
    },
    cast() {
      return CastStore.state.cast;
    },
    movieSimilar() {
      return MovieCreditsStore.state.movieSimilar;
    },
  },
  beforeCreate() {
    const id = this.$route.params.id;
    this.$router.push({ name: "Film", params: { id } });
    film(id);
    getMovieSimilar(id);
    getCast(id);
  },
  watch: {
    $route(newValue, oldValue) {
      const id = newValue.params.id;

      this.$router.push({
        name: "Film",
        params: { id },
      });
      film(id);
      getMovieSimilar(id);
      getCast(id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.film {
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
