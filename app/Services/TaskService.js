const taskAPI = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/victor/todos"
})


class TaskService {
    constructor() {
        console.log("task service is connected")
    }
    async getTasks() {
        try {
            let res = await taskAPI.get()
            console.log(res.data)


        } catch (error) {
            console.log(error)

        }

    }
    async postTask(task) {
        const request = { description: task.description }
        try {
            let res = await taskAPI.post("", request)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
}

export const taskService = new TaskService()
