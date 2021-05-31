import { ProxyState } from "../AppState.js";

const weatherAPI = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather"
});

class WeatherService {

    async getWeather() {
        try {
            let res = await weatherAPI.get();
            console.log(res.data, "weatherapi");
            ProxyState.weather = res.data;
        } catch (error) {
            console.log(error)
        }


    }
}

export const weatherService = new WeatherService();
