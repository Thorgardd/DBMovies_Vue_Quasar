<template>
  <div class="barContainer">
    <q-input class="searchBar" type="text" @change="(e) => onChange(e?.target.value)"/>
  </div>
</template>

<script>
import {JsonParser} from "src/utils/Utils";

export default {
  name: "SearchBar",
  methods: {
    onChange(value) {
      this.$store.commit('setSearch', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchBar{
  display: flex;
  height: auto;
  width: 100%;
}
</style>
