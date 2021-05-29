import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
import Task from "../Models/Task.js"
import { generateId } from "../Utils/GenerateId.js"

function draw() {
    console.log("task draw");

}

export default class TaskController {
    constructor() {
        console.log("task controller is working");
        ProxyState.on("tasks", draw);
        this.addTask("Random String");
        this.getTasks();
    }

    getTasks() {
        taskService.getTasks();

    }

    addTask(description) {
        const id = generateId()
        console.log(id, description)
        const task = new Task(description, false, id,)
        taskService.postTask(task);


    }

}