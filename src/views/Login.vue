<template>
  <div class="lr-form">
      <form @submit.prevent="pressed">
            <h1>Login</h1>
            <div class="login">
                <input type="email" placeholder="login" v-model="email" autocomplete="username">
            </div>
            <div class="password">
                <input type="password" placeholder="password" v-model="password" autocomplete="current-password">
            </div>
            <button type="submit">Login</button>
      </form>
      <div v-if="error" class="error">{{ error.message }}
          <span>
              Need an account? <router-link to="/register"></router-link>
          </span>
      </div>

  </div>
</template>

<script>
import * as firebase from  "firebase/app"
import "firebase/auth"

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async pressed() {
            try {
                const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                console.log(val);
                this.$router.replace({name: "weather"})
            } catch(err) {
                console.log(err);
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>