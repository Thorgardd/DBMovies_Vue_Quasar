<template>
  <div class="container">
    <h2>Bienvenue sur The Movie Database</h2>
    <LoginForm/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LoginForm from "components/LoginForm.vue";
export default defineComponent({
  name: 'HomePage',
  components: {
    LoginForm

  },
})
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  min-height: 90vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2{
    font-family: "Academy Engraved LET", sans-serif;
  }
}
</style>
