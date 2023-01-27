<template>
  <div class="container">
    <div class="showList">
      <CardComponent v-for="show in shows" :entity="show"/>
    </div>
  </div>
</template>

<script>
import CardComponent from "components/CardComponent.vue";
import {JsonParser, RedirectIfNotAuth} from "src/utils/Utils";

export default {
  name: "ShowPage",
  components: {
    CardComponent
  },
  data() {
    return {
      shows: JsonParser(this.$store.getters.getShows)
    }
  },
  methods: {
    GetShowsByTrends() {
      this.$axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.$apiKey}&language=en-US&page=1`)
        .then((res) => {
          this.$store.commit('setShows', res.data.results)
        })
        .catch((err) => console.log(err))
    }
  },
  created() {
    RedirectIfNotAuth(this.$store.getters.getIsAuth, this.$router)
    this.GetShowsByTrends();
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 95vh;
  width: 100%;
  display: flex;

  .showList {
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
