import { Task } from './task';
import { TaskList } from './taskList';
import { TaskListView } from './taskListView';


let realTaskList = new TaskList();
let taskInputElement = document.querySelector('#task') as HTMLInputElement;
let taskListElement = document.querySelector('#task-list') as HTMLElement;
let addTaskButton = document.querySelector('#buttonId') as HTMLElement;
new TaskListView(realTaskList, taskInputElement, taskListElement, addTaskButton);