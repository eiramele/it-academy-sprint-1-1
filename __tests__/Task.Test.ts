import { Task } from '../src/task';

test('should get task text', () => {
    const task = new Task('test task');
    expect(task.getText()).toBe('test task');
});

test('should get task done status', () => {
    const task = new Task('test task');
    expect(task.isTaskDone()).toBe(false);
});

test('should toggle task done status', () => {
    const task = new Task('test task');
    task.toggleDone();
    expect(task.isTaskDone()).toBe(true);
});