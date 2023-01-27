<template>
  <q-form class="form" autofocus>
    <q-input id="login" name="login" type="text" v-model="login" label="Votre login"/>
    <q-input id="password" name="password" type="password" v-model="password" label="Votre mot de passe" v-on:keyup.enter="CheckAuth"/>
    <q-btn @click="CheckAuth">Valider</q-btn>
    <q-item-label class="alert" v-if="this.showMessage">Identifiants incorrects</q-item-label>
  </q-form>
</template>

<script>
import {user} from "src/utils/login";
export default {
  name: "LoginForm",
  components: {},
  data() {
    return {
      login: "",
      password: "",
      isAuth: this.$store.getters.getIsAuth,
      showMessage: false
    }
  },
  methods: {
    async CheckAuth(e) {
      e.preventDefault();
        if (user.username === this.login && user.password === this.password){
          this.$store.commit('setIsAuth', true)
          this.$router.push("/movies");
        }
        else {
          alert("Identifiants incorrects")
          this.login = ""
          this.password = ""
        }
    }
  },
  beforeCreate() {
    if (this.$store.getters.getIsAuth === true){
      this.$router.push("/movies")
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  width: 40%;
  height: auto;
  flex-direction: column;
  gap: 50px;

  q-item-label{
    color: red;
    text-transform: uppercase;
  }

}
</style>
