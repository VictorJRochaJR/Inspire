import ImageController from "./Controllers/ImageController.js"
import QuoteController from "./Controllers/QuoteController.js";
import TaskController from "./Controllers/TaskController.js";
import WeatherController from "./Controllers/WeatherController.js";

class App {
  constructor() {
    console.log("app initialized")
  }
  imageController = new ImageController();
  taskController = new TaskController();
  quoteController = new QuoteController();
  weatherController = new WeatherController();

}



function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec;
  var t = setTimeout(function () { currentTime() }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();





window["app"] = new App();
