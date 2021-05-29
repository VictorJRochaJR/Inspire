import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"

const taskAPI = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/victor/todos"
})


class TaskService {
    constructor() {
        console.log("task service is connected")
    }
    async getTasks() {
        try {
            let res = await taskAPI.get();
            ProxyState.tasks = res.data.map(t => new Task(t.description, t.completed, t._id))
            console.log(ProxyState.tasks);

        } catch (error) {
            console.log(error);

        }

    }
    async postTask(task) {
        console.log(task.task, "postTask")
        const request = { description: task.task }
        try {
            let res = await taskAPI.post("", request)
            console.log("afterpost", res)
            ProxyState.tasks = this.getTasks()
        } catch (error) {
            console.log(error)
        }
    }



    async deleteTask(id) {
        console.log(id, "deleteTask")
        try {
            let res = await taskAPI.delete("/" + id)
            console.log(res)
            ProxyState.tasks = this.getTasks()
        } catch (error) {
            console.log(error)
        }
    }


}


export const taskService = new TaskService()
