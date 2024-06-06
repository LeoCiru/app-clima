import styles from "./Form.module.css";
import { countries } from "../../data/db";
import { useState } from "react";
import { SearchType } from "../../types";
import Alert from "../Alert/Alert";

type FormProps = {
    fetchWeather: (search: SearchType) => void,
}

function Form({fetchWeather} : FormProps){
    
    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    });

    const [alert, setAlert] = useState('');

    function handleChange(e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (Object.values(search).includes('')) {
            setAlert("Todos los campos son obligatorios");
            return;
        }

        setAlert('');
        
        fetchWeather(search);
    }


  return (
    <>
        {alert && <Alert>{alert}</Alert>}

        <form
            className={styles.form}
                onSubmit={handleSubmit}
            >
            <label htmlFor="city">Ciudad:</label>
            <input
                type="text"
                name="city"
                id="city"
                placeholder="Ejemplo: Las Vegas"
                value={search.city}
                onChange={handleChange}
                />
        
            <label htmlFor="country">País:</label>
            <select
                name="country"
                id="country"
                value={search.country}
                onChange={handleChange}
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
    </>
  )
}

export default Form