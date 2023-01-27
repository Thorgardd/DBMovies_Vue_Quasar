<template>
  <div class="container">
    <SearchBar/>
    <div class="searchList">
      <div v-for="results in this.searchResult">
        <CardComponent :entity="result" v-for="result in results"/>
      </div>
    </div>
  </div>
</template>

<script>
import {JsonParser, RedirectIfNotAuth} from "src/utils/Utils";
import SearchBar from "components/SearchBar.vue";

export default {
  name: "SearchPage",
  components: {
    SearchBar
  },
  methods: {

  },
  data() {
    return {
      searchResult: JsonParser(this.$store.getters.getSearchResult)
    }
  },
  created() {
    RedirectIfNotAuth(this.$store.getters.getIsAuth, this.$router)
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;

  .searchList {
    background-color: yellow;
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
