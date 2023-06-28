"use strict";
class Task {
    constructor(text) {
        this.text = text;
        this.isDone = false;
    }
    toggleDone() {
        this.isDone = !this.isDone;
    }
    getText() {
        return this.text;
    }
    isTaskDone() {
        return this.isDone;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(text) {
        let task = new Task(text);
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
    removeTask(taskToRemove) {
        this.tasks = this.tasks.filter(task => task !== taskToRemove);
    }
}
class TaskListView {
    constructor(taskList, taskInputElement, taskListElement, addTaskButton) {
        this.taskList = taskList;
        this.taskInputElement = taskInputElement;
        this.taskListElement = taskListElement;
        this.addTaskButton = addTaskButton;
        this.addTaskButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.addTask(this.taskInputElement.value);
            this.taskInputElement.value = "";
        });
    }
    addTask(text) {
        this.taskList.addTask(text);
        let task = this.taskList.getTasks().slice(-1)[0];
        let taskElement = this.createTaskElement(task);
        this.taskListElement.appendChild(taskElement);
    }
    render() {
        this.taskListElement.innerHTML = '';
        for (let task of this.taskList.getTasks()) {
            let taskElement = this.createTaskElement(task);
            this.taskListElement.appendChild(taskElement);
        }
    }
    createTaskElement(task) {
        let div = document.createElement('div');
        div.className = 'card';
        let divBody = document.createElement('div');
        divBody.className = 'card-body d-flex align-items-center';
        let title = document.createElement('h5');
        title.className = 'card-title mr-auto';
        title.textContent = task.getText();
        let doneBtn = document.createElement('button');
        doneBtn.className = 'btn btn-success p-2 mr-2';
        doneBtn.textContent = "Mark as done";
        doneBtn.addEventListener('click', function () {
            title.style.textDecoration = 'line-through';
        });
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger p-2';
        deleteBtn.textContent = "Delete";
        divBody.appendChild(title);
        divBody.appendChild(doneBtn);
        divBody.appendChild(deleteBtn);
        div.appendChild(divBody);
        deleteBtn.addEventListener('click', () => {
            div.remove();
            this.taskList.removeTask(task);
        });
        return div;
    }
}
let realTaskList = new TaskList();
let taskInputElement = document.querySelector('#task');
let taskListElement = document.querySelector('#task-list');
let addTaskButton = document.querySelector('#buttonId');
new TaskListView(realTaskList, taskInputElement, taskListElement, addTaskButton);
//# sourceMappingURL=index.js.map