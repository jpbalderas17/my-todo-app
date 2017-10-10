import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TodosDataService } from './todos/todos-data.service';



// Modules
import { AppRouterModule } from './app.router.module';
import { SharedModule } from './shared/shared.module';

// Component
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodosComponent } from './todos/todos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TasksComponent } from './todos/tasks/tasks.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoHeaderComponent } from './todos/todo-header/todo-header.component';




// Services
import { TodosService } from './todos/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    SecondPageComponent,
    PageNotFoundComponent,
    TodosComponent,
    FooterComponent,
    TasksComponent,
    TodoComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRouterModule,
    HttpModule,
    InMemoryWebApiModule.forRoot( TodosDataService, {delay: 1000} )
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
