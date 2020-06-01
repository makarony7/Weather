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
      <div v-if="error" class="error">{{ error.message }}</div>
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
            error: 'test'
        }
    },
    methods: {
        async pressed() {
            try {
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
                // this.$router.replace({name: 'weather'})

            } catch(error) {
                console.log(this.error);
                this.error = error
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>