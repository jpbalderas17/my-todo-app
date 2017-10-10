class Filter {
    keyword?: string;
}

export class TodoModel extends Filter {
    public id: number;
    public title: string;
    public Tasks: Array<TaskModel>;
}

export class TaskModel {
    public id: number;
    public task: string;
    public done: boolean;
    public todo_id: number;
}
