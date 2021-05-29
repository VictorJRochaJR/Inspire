import ImageController from "./Controllers/ImageController.js"
import TaskController from "./Controllers/TaskController.js";
class App {
  imageController = new ImageController()
  taskController = new TaskController()
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
