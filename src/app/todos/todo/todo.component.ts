import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { TasksComponent } from '../tasks/tasks.component';
import { TodosService } from '../todos.service';
import { TodoModel, TaskModel } from '../todos.model';
import { MiniLoaderComponent } from '../../shared/mini-loader/mini-loader.component';
import { Subscription }   from 'rxjs/Subscription';



@Component({
  selector: 'app-to-do',
  templateUrl: './todo.component.html'
})
export class TodoComponent implements OnInit {

  @ViewChild(MiniLoaderComponent) myLoader: MiniLoaderComponent;
  @ViewChild(TasksComponent) tasksComponent: TasksComponent;

  @Input() todo:TodoModel ;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter<any>();

  subscription: Subscription;
  

  
  
  taskList: Array<TaskModel> = new Array<TaskModel>();

  constructor(private _todoService: TodosService) { }

  ngOnInit() {
    
  }

  loadTask(id: number) {
    this._todoService.getTasks(id);
  }
  
  refreshTask(event: any) {
    this.tasksComponent.loadTask(this.todo.id);
    // const todoTask = this.tasksComponents.find((item: TasksComponent, index: number) => {
    //   return index === event.index;
    // });

    // todoTask.loadTask(event.todo.id);

  }

  deleteTodo(event: any) {
    this._todoService.deleteTodo(event.todo.id).then( any => {
        this.deleteEvent.emit({todo: event.todo});
        this._todoService.confirmDelete(event.todo);
      }
    );
  }
}
