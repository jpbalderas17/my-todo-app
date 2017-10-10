import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';


import { TodoModel, TaskModel } from './todos.model';


@Injectable()
export class TodosService {

  private todoList: Array<TodoModel> = new Array<TodoModel>();
  private todosUrl = 'api/todos';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

   // Observable string sources
   private deleteAnnouncedSource = new Subject<TodoModel>();
   private deleteConfirmedSource = new Subject<TodoModel>();
   

  // Observable string streams
  deleteAnnounced$ = this.deleteAnnouncedSource.asObservable();
  deleteConfirmed$ = this.deleteConfirmedSource.asObservable();

  constructor(private http: Http) {

    // this.todoList = [
    //   {
    //     Id: 1, Title: 'First Todo',
    //     Tasks: [
    //       { Id: 1, Task: 'sample 1', Done: true },
    //       { Id: 2, Task: 'sample 2', Done: false },
    //       { Id: 3, Task: 'sample 3', Done: false }
    //     ]
    //   },
    //   {
    //     Id: 2, Title: 'Second Todo',
    //     Tasks: [
    //       { Id: 4, Task: 'sample 4', Done: true },
    //       { Id: 5, Task: 'sample 5', Done: true },
    //       { Id: 6, Task: 'sample 6', Done: false }
    //     ]
    //   },
    //   {
    //     Id: 3, Title: 'Third Todo',
    //     Tasks: [
    //       { Id: 7, Task: 'sample 7', Done: true },
    //       { Id: 8, Task: 'sample 8', Done: false },
    //       { Id: 9, Task: 'sample 9', Done: true },
    //       { Id: 10, Task: 'sample 10', Done: true },
    //       { Id: 11, Task: 'sample 11', Done: true },
    //       { Id: 12, Task: 'sample 12', Done: true }
    //     ]
    //   }
    // ];

  }

  announceDelete(todo: TodoModel) {
    this.deleteAnnouncedSource.next(todo);
  }

  confirmDelete(todo: TodoModel) {
    this.deleteConfirmedSource.next(todo);
  }

  get(): Promise<TodoModel[]> {
    return this.http.get(this.todosUrl)
      .toPromise()
      .then(response => response.json() as TodoModel[])
      .catch(this.handleError);
  }

  getTasks(id: number): Promise<TaskModel[]> {
    return this.http.get(`api/tasks?todo_id=${id}`)
    .toPromise()
    .then(response => response.json() as TaskModel[])
    .catch(this.handleError);
  }
  deleteTodo(id:number ){
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(()=>null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
