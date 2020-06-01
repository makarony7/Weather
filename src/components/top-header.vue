<template>
  <div>
    <nav class="menu">
      <router-link to="/login" v-if="!loggedIn">Logowanie</router-link>
      <router-link to="/register" v-if="!loggedIn">Rejestracja</router-link>
      <router-link to="/weather" v-if="loggedIn">Pogoda</router-link>
      <button v-if="loggedIn" @click="signOut" class="log-out-btn">
        <i class="icon-logout"></i>
      </button>
    </nav>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false
    };
  }
};
</script>

<style lang="less" scoped>
div {
  color: inherit;
}
</style>