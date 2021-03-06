import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import firebase from "firebase/app"
import BootstrapVue from 'bootstrap-vue';

import '../node_modules/bootstrap/scss/bootstrap.scss'
import './assets/less/main.less'
import './assets/fontello/css/fontello.css'

Vue.prototype.$axios = axios
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDxW3nyHcRL0Ny38OKgIc1EPBP_4n27_2Q",
  authDomain: "logintut-be870.firebaseapp.com",
  databaseURL: "https://logintut-be870.firebaseio.com",
  projectId: "logintut-be870",
  storageBucket: "logintut-be870.appspot.com",
  messagingSenderId: "1062392972684",
  appId: "1:1062392972684:web:48ec83fc81840c64d302a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.use(BootstrapVue);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
