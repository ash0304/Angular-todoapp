import { Component } from '@angular/core';
import { TodoItem } from './shared/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  todoItems: TodoItem[] = [
    {
      id: 1,
      value: 'Todo Item No.1',
      done: false
    },
    {
      id: 2,
      value: 'Todo Item No.2',
      done: true
    },
    {
      id: 3,
      value: 'Todo Item No.3',
      done: false
    }
  ];
}
