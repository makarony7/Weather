<template>
  <div>
    <nav class="header-menu">
      <div v-if="!loggedIn">
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
      <div v-if="loggedIn">
        <h2>Weather</h2>
        <button @click="signOut" class="log-out-btn">
          <i class="icon-logout"></i>
        </button>
      </div>
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