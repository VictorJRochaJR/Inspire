import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js"
import Task from "../Models/Task.js"


function draw() {
    console.log("task draw");
    let template = " "
    console.log(ProxyState.tasks, "tasks")

    ProxyState.tasks?.forEach(t => {
        console.log(t)
        template += t.taskTemplate
    });

    document.getElementById("tasks").innerHTML = template;

}

export default class TaskController {
    constructor() {
        console.log("task controller is working");
        ProxyState.on("tasks", draw);
        // this.addTask("Random String");
        // this.deleteTask(id);
        this.getTasks();

    }

    getTasks() {
        taskService.getTasks();

    }

    addTask(event) {
        event.preventDefault()
        let description = event.target.description.value;
        console.log(description);
        const task = new Task(description, false);
        taskService.postTask(task);
    }
    deleteTask(id) {
        console.log(id, "deleteTask");
        taskService.deleteTask(id);
    }

    toggleTask(id) {
        console.log(id, "toggletaskID")
        const task = ProxyState.tasks.find(t => {
            console.log(t, id)
            return t.id === id
        })
        console.log(task)
        taskService.editTask(!task.completed, id)
    }
}

