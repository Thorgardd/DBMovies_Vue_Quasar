<template>
  <div class="barContainer">
    <q-input class="searchBar" label="Recherche" type="text" v-model="this.search" v-on:keyup.enter="() => this.GetSearch()"/>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    isMovie: Boolean
  },
  data() {
    return {
      search: ""
    }
  },
  methods: {
    GetSearch() {
      this.$axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${this.$apiKey}&language=en-US&page=1&include_adult=false&query=${this.search}`)
        .then((res) => this.$store.commit('setSearchResult', res.data.results))
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar{
  display: flex;
  height: auto;
  width: 100%;
  margin: 10px;
  padding-left: 10px;
}
</style>
