import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {

  const {fetchWeather, weather, notFound, hasWeatherData} = useWeather()

  return (
    <>
      <main>
        <header>
          <h1 className={styles.title}>Buscador de Clima</h1>
        </header>
        
        <div className={styles.container}>
          <Form
            fetchWeather={fetchWeather}
          />
          
          {notFound && <Alert>No se encuentra esta ciudad</Alert>}

          {hasWeatherData && <WeatherDetail weather={weather}/>}
        </div>
      </main>
    </>
  )
}

export default App
