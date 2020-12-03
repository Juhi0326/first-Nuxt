<template>
  <v-container>
    <div class="display-3 mb-6">
      Weather App
    </div>
    <v-row>
      <v-col cols="12">
        Enter City name
        <v-form @submit.prevent="getWeather">
          <v-text-field
            v-model="city"
            solo
            label="Enter City name"
            class="mt-4"
            @keyup.13="getWeather()"
          />
          <v-btn type="submit" color="green darken-3">
            click me for weather!
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card
          class="mx-auto"
          max-width="344"
          color="red darken-1"
          min-height="300px"
        >
          <v-card-text v-if="!errorMessage">
            <div class="text--primary d-flex justify-space-around">
              Temperature
            </div>
            <p class="display-1 text--primary text-center pt-6">
              {{ city | capitalize }}
            </p>
            <p class="text--primary text-center">
              {{ weather.weather[0].main }}
            </p>
            <div class="text--primary text-center">
              {{ Math.round(weather.main.temp - 273.15) }}
              <v-icon small>
                mdi mdi-temperature-celsius
              </v-icon>
            </div>
            <div class="text-center">
              <img :src="icon">
            </div>
          </v-card-text>
          <v-card-text v-else>
            <p class="subtitle-2 text--primary text-center pt-6">
              opps, something went wrong, maybe there is not a city name like this...
            </p>
            <br>
            <p class="subtitle-2 text--primary text-center pt-6">
              this is the error message:
            </p>

            <br>
            {{ errorMessage }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card
          class="mr-16"
          color="red darken-1"
          min-height="300px"
        >
          <v-card-text>
            <div class="text--primary d-flex justify-space-around">
              other
            </div>
            <p class="headline text--primary text-center pt-6">
              Min temperature : {{ Math.round(weather.main.temp_min - 273.15) }}
              <v-icon>
                mdi mdi-temperature-celsius
              </v-icon>
            </p>
            <p class="headline text--primary text-center pt-6">
              Max temperature : {{ Math.round(weather.main.temp_max - 273.15) }}
              <v-icon>
                mdi mdi-temperature-celsius
              </v-icon>
            </p>
            <p class="headline text--primary text-center pt-6">
              Humidity : {{ weather.main.humidity }}%
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  filters: {
    capitalize (value) {
      if (!value) { return '' }
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    uppercase (value) {
      if (!value) { return '' }
      value = value.toString()
      return value.toUpperCase()
    },
    numbers (value) {
      return parseFloat(value).toLocaleString('hu')
    }
  },
  asyncData ({ params, $axios }) {
    return $axios
      .$get(
        `https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=${process.env.weatherAppId}`
      )
      .then((res) => {
        return {
          weather: res
        }
      })
  },
  data () {
    return {
      city: 'Budapest',
      weather: {},
      errorMessage: undefined
    }
  },
  computed: {
    icon () {
      return this.weather.weather ? `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
        : ''
    }
  },
  created () {
    this.getWeather()
    // eslint-disable-next-line no-console
    console.log(this.weather)
  },
  methods: {
    getWeather () {
      // eslint-disable-next-line quotes
      this.errorMessage = undefined
      this.$axios
        .$get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${process.env.weatherAppId}`
        )
        // eslint-disable-next-line no-console
        .then(res => (this.weather = res))
        .catch((err) => {
          // eslint-disable-next-line no-console
          this.errorMessage = err
        })
    }
  }
}
</script>

<style scoped></style>
