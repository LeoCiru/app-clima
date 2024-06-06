import { SearchType } from "../types"

function useWeather() {

    async function fetchWeather(search: SearchType) {
        const appID = "b768059f16202da32c4a439134bea124"

        const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appID}`

        try {
            const response = await fetch(urlGeo);
            const data = await response.json();

            const lat = data[0].lat;
            const lon = data[0].lon;

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`

            console.log(urlWeather);
        } catch (error) {
            console.log(error);
        }   
    }


  return{
    fetchWeather,
  }
}

export default useWeather