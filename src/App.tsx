import styles from "./App.module.css";
import Form from "./components/Form/Form";

function App() {

  return (
    <>
      <main>
        <header>
          <h1 className={styles.title}>Buscador de Clima</h1>
        </header>
        
        <Form/>
      </main>
    </>
  )
}

export default App
