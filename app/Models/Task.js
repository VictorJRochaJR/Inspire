
export default class Task {

    constructor(task, completed, _id) {
        this.task = task;
        this.completed = completed;
        this.id = _id;


    }


    get taskTemplate() {
        return /*html*/ ` 
        <div class = "col-2">
        <div class = "card mb-2">
        <p onclick = "app.taskController.deleteTask('${this.id}')">${this.task}</p>
        <input type = "checkbox" ${this.completed ? ' checked ' : ''} onclick = "app.taskController.toggleTask('${this.id}')"/>
         </div>
        </div>
        `

    }
}