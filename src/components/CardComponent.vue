<template>
  <q-card class="card">
    <img :src="GetPosterByUrl(entity.backdrop_path)"/>
    <q-card-section>
      <h6>{{entity.title ? entity.original_title : entity.name}}</h6>
      <p>{{entity.release_date}}</p>
      <p>{{entity.overview}}</p>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    entity: Object
  },
  data() {
    return {
      entity: this.entity
    }
  },
  methods: {
    GetPosterByUrl(url) {
      return `https://image.tmdb.org/t/p/w500/${url}`
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  height: 550px;
  width: 40%;
  flex-wrap: wrap;

  img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
