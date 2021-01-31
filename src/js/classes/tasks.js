import { TaskModel } from './task-model';
export class Tasks {

    constructor() {
        this.tasks = [];
        this.initStorage();
    }

    initStorage() {
        const tasksStorage = localStorage.getItem('tasks');
        if (tasksStorage != '' && tasksStorage != null) {
            const decodedTasks = JSON.parse(tasksStorage);
            this.tasks = decodedTasks;
        }
    };
    updateTask(task, ) {
        for (let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].id == task.id){
                this.tasks[i] = task;
                break;
            }
        }
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    deleteTask(id) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                this.tasks.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    createNewTask(title, description, group) {
        const task = new TaskModel(title, description, group);
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}