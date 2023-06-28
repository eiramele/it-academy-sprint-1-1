import { Task } from './task';
import { TaskList } from './taskList';

export class TaskListView {
    private taskList: TaskList;
    private taskInputElement: HTMLInputElement;
    private taskListElement: HTMLElement;
    private addTaskButton: HTMLElement;

    constructor(taskList: TaskList, taskInputElement: HTMLInputElement, taskListElement: HTMLElement, addTaskButton: HTMLElement) {
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

    addTask(text: string) {
        this.taskList.addTask(text);
        let task = this.taskList.getTasks().slice(-1)[0]; // get the last task added
        let taskElement = this.createTaskElement(task);
        this.taskListElement.appendChild(taskElement);
    }

    render() {
        // Clear the task list element
        this.taskListElement.innerHTML = '';

        
        // Create and append new task elements
        for (let task of this.taskList.getTasks()) {
            let taskElement = this.createTaskElement(task);
            this.taskListElement.appendChild(taskElement);
        }
    }

    createTaskElement(task: Task) {
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