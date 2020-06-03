<template>
    <div>
        <div class="header">
            <b-container>
                <top-header />
            </b-container>
        </div>
        <div class="lr-form p-absolute">
            <b-container>
                <b-form @submit.prevent="pressed">
                    <h1 class="text-center">Login</h1>
                    <div class="login">
                        <b-form-input class="x-input" type="email" placeholder="login" v-model="email" autocomplete="email" />
                    </div>
                    <div class="password">
                        <b-form-input class="x-input" type="password" v-model="password" placeholder="password" />
                    </div>
                    <button type="submit" class="big-btn">Login now!</button>
                </b-form>
                <div v-if="error" class="error text-center">
                    <div>{{ error }}</div>
                    Need an account? <router-link to="/register">register</router-link>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
import * as firebase from  "firebase/app"
import "firebase/auth"
import topHeader from "../components/top-header"

export default {
    name: "Login",
    components: {
      topHeader
    },
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
