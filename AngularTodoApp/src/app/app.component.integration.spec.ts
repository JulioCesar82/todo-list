import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent Integration', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ AppComponent ]
    // })
    // .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add and display a new todo', () => {
    const todoTitle = 'New Integration Todo';
    component.todoList.addTodo(todoTitle);
    fixture.detectChanges();
   
    const compiled = fixture.nativeElement;
   
    expect(compiled.querySelector('ul').textContent).toContain(todoTitle);
  });
});