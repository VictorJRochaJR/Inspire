
export default class Task {

    constructor(task, completed, id) {
        this.task = task;
        this.completed = completed;
        this.id = id;
    }


    get taskTemplate() {
        return /*html*/ ` 
        <div class = "col-3">
        <p>${this.task}</p>
        <input type = "checkbox"/>
        </div>
        `

    }
}