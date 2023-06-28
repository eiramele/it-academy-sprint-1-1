import { Task } from '../src/task';
import { TaskList } from '../src/taskList';

test('should add task to task list', () => {
    const taskList = new TaskList();
    taskList.addTask('test task');
    expect(taskList.getTasks().length).toBe(1);
    expect(taskList.getTasks()[0].getText()).toBe('test task');
});

test('should remove task from task list', () => {
    let taskList = new TaskList();
    let task = new Task('test task');
    taskList.addTask(task.getText());
    taskList.removeTask(task);
    expect(taskList.getTasks().includes(task)).toBe(false);
  });