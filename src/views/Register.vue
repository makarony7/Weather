<template>
  <div class="lr-form">
      <form @submit.prevent="pressed">
            <h1 class="text-center">Rejestracja</h1>
            <div class="email">
                <input type="email" v-model="email" placeholder="email" autocomplete="username">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="hasło" autocomplete="current-password">
            </div>
            <button type="submit" class="big-btn">Zarejestruj się</button>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
import * as firebase from  "firebase/app"
import "firebase/auth"

export default {
    name: "Register",
    data () {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async pressed() {

                firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/weather', () => {})
                })
                .catch( err => {
                    this.error = err.message;
                });
        }
    }
}
</script>
