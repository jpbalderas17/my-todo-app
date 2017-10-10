import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { TasksComponent } from './tasks/tasks.component';
import { TodosService } from './todos.service';
import { TodoModel } from './todos.model';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: Array<TodoModel> = new Array<TodoModel>();

  

  constructor(private _todoService: TodosService) { 
    this._todoService.deleteConfirmed$.subscribe((
      todo => {
        this.todoList.splice(this.todoList.indexOf(todo),1);
      }
    ));
   }

  ngOnInit() {
   this.getTodos();
  }

  addTask(todo: TodoModel) {
    todo.Tasks.push({ id: 999, task: 'new task', done: false, todo_id: todo.id });
  }

  getTodos() {
    this._todoService.get()
    .then(todos => this.todoList = todos);
  }

  deleteTodo(event: any) {
    console.log(this.todoList);
  }
}
