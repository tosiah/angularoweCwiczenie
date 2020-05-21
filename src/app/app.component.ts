import { Component } from '@angular/core';
import { TasksToDoService } from './tasks-to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'codeBreakGame-app';
  tasks;
  currentItem = '';
  addTask() {
  this.taskToDoService.addTask(this.currentItem);
  this.currentItem = '';
}
  deleteTask(element) {
    this.taskToDoService.deleteTask(element.id);
  }
  constructor(private taskToDoService: TasksToDoService) {
    this.tasks = this.taskToDoService.getTasks();
  }
}
