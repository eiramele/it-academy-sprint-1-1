import { Task } from './task';

export class TaskList {
    private tasks: Task[];
     
    constructor() {
        this.tasks = [];
    }

    addTask(text: string) {
        let task = new Task(text);
        this.tasks.push(task);
    }

    getTasks() {
        return this.tasks;
    }
    removeTask(taskToRemove: Task) {
        this.tasks = this.tasks.filter(task => task !== taskToRemove);
    }
}