<template>
  <div class="weather">
    <div class="bg-behind bg-night"></div>
    <div class="header">
      <b-container>
        <top-header />
      </b-container>
    </div>
    <div class="weather__inside p-absolute">
      <div v-if="error" class="error text-center">
        CITY NOT FOUND !
      </div>
      <b-container>
        <b-form @submit.prevent="pressed" class="weather__inside-form" autocomplete="off">
          <b-form-input
            value=""
            type="text"
            v-model="currentCity"
            placeholder="Enter a city"
            class="x-input"
          />
        </b-form>
         <!-- v-bind:class="{ error : errorClass }" -->
        <div v-if="currentWeather" class="weather__inside-info" v-bind:class="{ errorer : error }">
          <img :src="this.currentIcon" class="weather-ico" alt="weather-ico" />
          <h2 class="text-center"><span>{{ currentWeather.name }}</span> <span>({{ currentWeather.sys.country }})</span></h2>
          <p>Weather: <span>{{ currentWeather.weather[0].description }}</span></p>
          <p>Temperature: <span>{{ currentWeather.main.temp }}° C</span></p>
          <p>Humidity: <span>{{ currentWeather.main.humidity }} %</span></p>
          <p>Pressure: <span>{{ currentWeather.main.pressure }} hpa</span></p>
          <p>Wind Speed: <span>{{ currentWeather.wind.speed }} m/s</span></p>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/top-header.vue'
import axios from "axios";

export default {
  components: {
    topHeader
  },
  name: "Weather",
  data() {
    return {
      currentWeather: null,
      currentCity: "Rzeszów",
      currentCountry: "world",
      unit: "metric",
      currentIcon: null,
      error: '',
      errorer: false
    };
  },
  methods: {
    pressed() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            this.currentCity +
            "," +
            this.currentCountry +
            "&appid=55cfddc4387a3df5a26e5b02d65a5fc0&units=" +
            this.unit +
            ""
        )
        .then(response => {
          this.currentWeather = response.data;
          this.currentIcon =
            "https://openweathermap.org/img/w/" +
            this.currentWeather.weather[0].icon +
            ".png";
            this.error = ''
        })
        .catch( err => {
            this.error = err.message;
        });
    }
  },
  mounted() {
    this.pressed();
  }
};
</script>