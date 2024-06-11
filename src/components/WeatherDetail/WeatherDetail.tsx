import { WeatherType } from "../../hooks/useWeather"
import styles from "./WeatherDetail.module.css";

type WeatherDetailProps = {
    weather: WeatherType
}

function WeatherDetail({weather} : WeatherDetailProps) {
  return (
    <div className={styles.weatherDetail}>
        <div>
            <h2>Clima de: {weather.name}</h2>
        </div>
        <div>
            <p className={styles.temp}>{weather.main.temp}&deg;C</p>
        </div>

        <div className={styles.temps}>
            <p>Min: {weather.main.temp_min}&deg;C</p>
            <p>Min: {weather.main.temp_max}&deg;C</p>
        </div>
    </div>
  )
}

export default WeatherDetail