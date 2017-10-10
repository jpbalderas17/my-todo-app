import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TasksDataService implements InMemoryDbService {
  createDb() {
    const todoList = [
        { id: 1, Task: 'sample 1', Done: true, todo_id: 1 },
        { id: 2, Task: 'sample 2', Done: false, todo_id: 1 },
        { id: 3, Task: 'sample 3', Done: false, todo_id: 1 },
        { id: 4, Task: 'sample 4', Done: true, todo_id: 2 },
        { id: 5, Task: 'sample 5', Done: true, todo_id: 2 },
        { id: 6, Task: 'sample 6', Done: false, todo_id: 2 },
        { id: 7, Task: 'sample 7', Done: true, todo_id: 3 },
        { id: 8, Task: 'sample 8', Done: false, todo_id: 3 },
        { id: 9, Task: 'sample 9', Done: true, todo_id: 3 },
        { id: 10, Task: 'sample 10', Done: true, todo_id: 3 },
        { id: 11, Task: 'sample 11', Done: true, todo_id: 3 },
        { id: 12, Task: 'sample 12', Done: true, todo_id: 3 }
    ];
    return {todoList};
  }
}