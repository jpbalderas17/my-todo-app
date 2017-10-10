import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TodosDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1, title: 'First Todo'
      },
      {
        id: 2, title: 'Second Todo'
      },
      {
        id: 3, title: 'Third Todo'
      }
    ];
    const tasks = [
        { id: 1, task: 'sample 1', done: true, todo_id: 1 },
        { id: 2, task: 'sample 2', done: false, todo_id: 1 },
        { id: 3, task: 'sample 3', done: false, todo_id: 1 },
        { id: 4, task: 'sample 4', done: true, todo_id: 2 },
        { id: 5, task: 'sample 5', done: true, todo_id: 2 },
        { id: 6, task: 'sample 6', done: false, todo_id: 2 },
        { id: 7, task: 'sample 7', done: true, todo_id: 3 },
        { id: 8, task: 'sample 8', done: false, todo_id: 3 },
        { id: 9, task: 'sample 9', done: true, todo_id: 3 },
        { id: 10, task: 'sample 10', done: true, todo_id: 3 },
        { id: 11, task: 'sample 11', done: true, todo_id: 3 },
        { id: 12, task: 'sample 12', done: true, todo_id: 3 }
    ];
    return { todos, tasks };
  }
}