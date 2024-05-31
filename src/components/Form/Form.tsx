import styles from "./Form.module.css";
import { countries } from "../../data/db";

function Form(){
  return (
    <form className={styles.form}>
        <label htmlFor="city">Ciudad:</label>
        <input
            type="text"
            name="city"
            id="city"
            placeholder="Ejemplo: Las Vegas"
        />

        <label htmlFor="country">País:</label>
        <select
            name="country"
            id=""
        >
            <option value="">-- Seleccione un país --</option>
            {countries.map(country => (
                <option
                    key={country.code}
                    value={country.code}
                >
                    {country.name}
                </option>
            ) )}
        </select>

        <button type="submit">Consultar Clima</button>
    </form>
  )
}

export default Form