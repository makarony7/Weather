<template>
  <div class="lr-form">
      <form @submit.prevent="pressed">
            <h1>Register</h1>
            <div class="email">
                <input type="email" v-model="email" placeholder="email" autocomplete="username">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password" autocomplete="current-password">
            </div>
            <button type="submit">Register</button>
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
            error: ''
        }
    },
    methods: {
        async pressed() {
            try {
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
                this.$router.replace({name: 'weather'})

            } catch(err) {
                console.log(err);
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>