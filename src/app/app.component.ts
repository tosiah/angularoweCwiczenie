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
  deleteTask(id: number) {
    this.taskToDoService.deleteTask(id);
    console.log('elementId: ' + id);
    this.tasks = this.taskToDoService.getTasks();
  }
  constructor(private taskToDoService: TasksToDoService) {
    this.tasks = this.taskToDoService.getTasks();
  }
}
