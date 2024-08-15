import { Component, OnInit, ChangeDetectorRef, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodoList } from 'my-todolist-package';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
  imports: [CommonModule],
  standalone: true,
  providers: [{ provide: ErrorHandler, useClass: ErrorService }]
})
export class AppComponent implements OnInit {
  public title = 'Angular Todo App';
  public todoList: TodoList;

  private errorService?: ErrorService;

  get items(): Todo[] {
    return this.todoList.getTodos(false);
  }

  constructor(errorService?: ErrorService) {
    this.todoList = new TodoList();
    this.errorService = errorService;
  }

  ngOnInit() {
    this.todoList.addTodo('Aprender Angular');
    this.todoList.addTodo('Criar um App com Angular');

    this.errorService?.error.subscribe(error => {
      alert(error);
    });
  }

  markComplete(id: number) {
    this.todoList.markTodoComplete(id);
  }

  addTodo(title: string) {
    try
    {
      this.todoList.addTodo(title);
    }
    catch (err: any)
    {
      alert(err?.message);
    }
  }

  removeTodo(id: number) {
    this.todoList.removeTodo(id);
  }
}