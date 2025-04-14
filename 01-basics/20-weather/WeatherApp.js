import { defineComponent } from 'vue/dist/vue.esm-bundler.js'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    const weatherData = getWeatherData();

    const getWeatherIcon = (index) => {
      return WeatherConditionIcons[weatherData[index].current.weather.id];
    }

    const nowSunStatus = (index) => {
      if ( weatherData[index].current.dt < weatherData[index].current.sunrise
        && weatherData[index].current.dt < weatherData[index].current.sunset){
        return true
      }
    }

    const weatherTemp = (index) => {
      return (weatherData[index].current.temp - 273.15).toFixed(1);
    }

    return {weatherData, getWeatherIcon, weatherTemp, nowSunStatus}
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="(weather, index) in weatherData" :key="index" class="weather-card" :class="{ 'weather-card--night': nowSunStatus(index) }">
          <div v-if="weather.alert !== null" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ weather.alert.sender_name + weather.alert.description }}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{weather.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{weather.current.dt}}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="weather.current.weather.description">{{ getWeatherIcon(index) }}</div>
            <div class="weather-conditions__temp">{{ weatherTemp(index) + " °C" }}</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ Math.round(weather.current.pressure * 0.75) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ weather.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ weather.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ weather.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    `})
