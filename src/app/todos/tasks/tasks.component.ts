import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { TodosService } from '../todos.service';
import { TaskModel } from '../todos.model';
import { TodosDataService } from '../todos-data.service';

import { MiniLoaderComponent } from '../../shared/mini-loader/mini-loader.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @ViewChild(MiniLoaderComponent) myLoader: MiniLoaderComponent;

  @Input() id: number ;
  @Input() keyword: string = "";

  taskList: Array<TaskModel> = new Array<TaskModel>();

  constructor(private _todoService: TodosService) { }

  ngOnInit() {
    this.loadTask(this.id);
  }

  loadTask(id: number) {
    this.myLoader.toggle();        
    this._todoService.getTasks(id)
      .then(tasks => {
        this.taskList = tasks;
        this.myLoader.toggle();
      });
  }

}
