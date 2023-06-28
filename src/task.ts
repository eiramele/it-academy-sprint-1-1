export class Task {
    private text: string;
    private isDone: Boolean;

    constructor(text:string) {
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