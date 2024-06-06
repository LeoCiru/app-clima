import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./hooks/useWeather";

function App() {

  const {fetchWeather} = useWeather()


  return (
    <>
      <main>
        <header>
          <h1 className={styles.title}>Buscador de Clima</h1>
        </header>
        
        <Form
          fetchWeather={fetchWeather}
        />
      </main>
    </>
  )
}

export default App
