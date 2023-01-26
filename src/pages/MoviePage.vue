<template>
  <div class="container">
    <div v-for="movie in this.movies">
      <q-card class="movieCard">
        <img class="poster" :src="GetUrlPosterMovie(movie.backdrop_path)">
        <q-card-section>
          <h3>{{ movie.title }}</h3>
          <q-item-label>{{ movie.release_date }}</q-item-label>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {apiKey} from "../utils/requests.js";

export default {
  name: "MoviePage.vue",
  components: {},
  data() {
    return {
      movies: this.$store.getters.getMovies
    }
  },
  methods: {
    GetUrlPosterMovie(urlPath) {
      return `https://image.tmdb.org/t/p/w500/${urlPath}`
    },
    GetTrendsMovies() {
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => this.$store.commit('setMovies', res.data.results))
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.GetTrendsMovies();
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-wrap: wrap;

  .movieCard {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;

    .poster {
      height: 250px;
      width: 250px;
      object-fit: cover;
      padding: 10px;
    }
  }
}
</style>
