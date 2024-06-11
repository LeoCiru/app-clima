import { useMemo, useState } from "react";
import { SearchType } from "../types"
import { z } from "zod"

//Creating schema to use Zod
const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_min: z.number(),
    temp_max: z.number()
  })
});

//Infering the type with the Schema
export type WeatherType = z.infer<typeof WeatherSchema>;

const initialState = {
  name: '',
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0
  }
}

function useWeather() {

  const [weather, setWeather] = useState<WeatherType>(initialState);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  
    async function fetchWeather(search: SearchType) {
        const appID = import.meta.env.VITE_API_KEY

        const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`

        //Setting "weather" empty to not to have previous information on the state
        setWeather(initialState);
        setLoading(true);
        try {
            const response = await fetch(urlGeo);
            const data = await response.json();

            if (!data[0]) {
              setNotFound(true);
              return;
            }

            const lat = data[0].lat;
            const lon = data[0].lon;

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`

            const responseWeather = await fetch(urlWeather);
            const dataWeather = await responseWeather.json();


            const result = WeatherSchema.safeParse(dataWeather);
            
            if (result.success) {
              setWeather(result.data);
            }

        } catch (error) {
            console.log(error);
        } finally {
          setLoading(false);
        }

      }
      
      //If weather.name has something, this returns "true"
      const hasWeatherData = useMemo(() => weather.name, [weather])

  return{
    fetchWeather,
    weather,
    notFound,
    hasWeatherData,
    loading
  }
}

export default useWeather