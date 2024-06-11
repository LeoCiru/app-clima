import { SearchType } from "../types"

function useWeather() {

    async function fetchWeather(search: SearchType) {
        const appID = import.meta.env.VITE_API_KEY

        const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`

        try {
            const response = await fetch(urlGeo);
            const data = await response.json();

            const lat = data[0].lat;
            const lon = data[0].lon;

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`

            const responseWeather = await fetch(urlWeather);
            const dataWeather = await responseWeather.json();

            console.log(dataWeather);
        } catch (error) {
            console.log(error);
        }   
    }


  return{
    fetchWeather,
  }
}

export default useWeather