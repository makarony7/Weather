<template>
    <div>
        <div class="header">
            <b-container>
                <top-header />
            </b-container>
        </div>
        <div class="lr-form p-absolute">
            <div class="container">
                <b-form @submit.prevent="pressed">
                    <h1 class="text-center">Register</h1>
                    <div class="email">
                        <b-form-input class="x-input" type="email" v-model="email" placeholder="email" autocomplete="email" />
                    </div>
                    <div class="password">
                        <b-form-input class="x-input" type="password" v-model="password" placeholder="password" autocomplete />
                    </div>
                    <button type="submit" class="big-btn">Register now!</button>
                </b-form>
                <div v-if="error" class="error text-center">
                    {{ error }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from  "firebase/app"
import "firebase/auth"
import topHeader from "../components/top-header"

export default {
    name: "Register",
    components: {
      topHeader
    },
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
