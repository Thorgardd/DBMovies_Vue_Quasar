<template>
  <div class="container">
    <div class="movieList">
      <CardComponent :entity="movie" v-for="movie in this.movies"/>
    </div>
  </div>
</template>

<script>
import CardComponent from "components/CardComponent.vue";
import {JsonParser, RedirectIfNotAuth} from "src/utils/Utils";
import SearchBar from "components/SearchBar.vue";

export default {
  name: "MoviePage.vue",
  components: {SearchBar, CardComponent},
  data() {
    return {
      movies: JsonParser(this.$store.getters.getMovies),
      searchResult: JsonParser(this.$store.getters.getSearchResult)
    }
  },
  methods: {
    GetMoviesByTrends() {
      this.$axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.$apiKey}&language=en-US&page=1`)
        .then((res) => {
          this.$store.commit('setMovies', res.data.results)
        })
        .catch((err) => console.log(err))
    }
  },
  created() {
    RedirectIfNotAuth(this.$store.getters.getIsAuth, this.$router)
    this.GetMoviesByTrends();
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  .movieList {
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
    display: flex;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
}
</style>
