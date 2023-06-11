import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'headerComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public emmitItemTodoList = new EventEmitter();

  public todoTitle: string = '';

  public addTodo() {
    this.todoTitle.trim();
    if (this.todoTitle.length != 0) {
      this.emmitItemTodoList.emit(this.todoTitle);
      this.todoTitle = '';
    }
  }
}
