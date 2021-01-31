export class TaskModel {
    constructor(title, description, group) {
        this.id = new Date().getTime();
        this.description = description;
        this.title = title;
        this.group = group;
    }

  
}