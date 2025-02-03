import { Component, OnInit, ChangeDetectorRef, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorService } from './error.service';
import { TodoItem, TodoList } from 'my-todolist-package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  imports: [CommonModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  standalone: true,
  providers: [{ provide: ErrorHandler, useClass: ErrorService }]
})
export class AppComponent implements OnInit {
  public title = 'Angular Todo App';
  public todoList: TodoList;

  private errorService?: ErrorService;

  get items(): TodoItem[] {
    return this.todoList.getTodoItems(false);
  }

  constructor(errorService?: ErrorService) {
    this.todoList = new TodoList();
    this.errorService = errorService;
  }

  ngOnInit() {
    this.errorService?.error.subscribe(error => {
      alert(error);
    });
  }

  markComplete(id: number) {
    this.todoList.markTodoItemComplete(id);
  }

  addTodoItem(title: string) {
    try
    {
      this.todoList.addTodoItem(title);
    }
    catch (err: any)
    {
      alert(err?.message);
    }
  }

  removeTodoItem(id: number) {
    this.todoList.removeTodoItem(id);
  }
}