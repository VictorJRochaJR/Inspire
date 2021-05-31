import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js"


function kTof(k) {
    let f = (k - 273.15) * 9 / 5 + 32;
    return f.toFixed(2);


}

function kToc(k) {
    let c = k - 273.15
    return c.toFixed(2);
}

function draw(temp) {
    let weather = ProxyState.weather;
    console.log(weather.main, "weather controller log");
    let template = `
    <div class = "text-white" onclick = "app.weatherController.toggleTemp()">${temp ? kTof(weather.main?.temp) + " F" : kToc(weather.main?.temp) + " C"}</div>
    
    `
    document.getElementById("weather").innerHTML = template;



}
export default class WeatherController {
    constructor() {
        this.temp = true;
        console.log("weathercontroller is connected");
        this.getWeather();
        ProxyState.on("weather", draw);
        draw(this.temp);
    }

    getWeather() {
        weatherService.getWeather();
    }

    toggleTemp() {
        this.temp = !this.temp;
        draw(this.temp);
    }
}