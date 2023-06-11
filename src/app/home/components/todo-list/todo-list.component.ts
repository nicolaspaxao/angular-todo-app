import { Component } from '@angular/core';
import { TodoClass } from '../../models/todo-class';

@Component({
  selector: 'todoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  public todoList: Array<TodoClass> = [];

  public addItem(event: string): void {
    this.todoList?.push({ nome: event, isCompleted: false })
  }

  public deleteTodo(index: number) {
    this.todoList?.splice(index, 1);
  }

}
