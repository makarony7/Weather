<template>
    <div>
        <div class="lr-form">
            <form @submit.prevent="pressed">
                    <h1 class="text-center">Logowanie</h1>
                    <div class="login">
                        <input type="email" placeholder="login" v-model="email" autocomplete="username">
                    </div>
                    <div class="password">
                        <input type="password" v-model="password" placeholder="hasło" autocomplete="current-password">
                    </div>
                    <button type="submit" class="big-btn">Zaloguj się</button>
            </form>
        <div v-if="error" class="error">{{ error.message }}
            <span>
                Need an account? <router-link to="/register"></router-link>
            </span>
        </div>
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
            const response = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .catch(err=>{
                this.error = err.message
            })

            if(response) {
                this.$router.replace({name: "weather"})
            }
        }
    }
}
</script>
