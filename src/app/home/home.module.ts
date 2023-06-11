import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ClearButtonComponent } from './components/clear-button/clear-button.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ClearButtonComponent,
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
