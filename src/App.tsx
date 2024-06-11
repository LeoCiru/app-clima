import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";
import Form from "./components/Form/Form";
import Spinner from "./components/Spinner/Spinner";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import useWeather from "./hooks/useWeather";

function App() {

  const {fetchWeather, weather, notFound, hasWeatherData, loading} = useWeather()

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
          {loading && <Spinner/>}
          {hasWeatherData && <WeatherDetail weather={weather}/>}
        </div>
      </main>
    </>
  )
}

export default App
