<template>
  <q-list v-for="movie in this.movieList">
    <CardComponent entity="movie"/>
  </q-list>
</template>

<script>
import CardComponent from "components/CardComponent.vue";

export default {
  name: "CardList",
  components: {CardComponent},
  props: {
    movieList: Array
  }
}
</script>

<style scoped>

</style>
