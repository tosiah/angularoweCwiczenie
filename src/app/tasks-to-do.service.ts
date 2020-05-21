import { Injectable } from '@angular/core';
import { Task } from '../app/models/task.model';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TasksToDoService {
  tasks: Task[] = [{id: 0, name: 'Kacperiusz', isDone: false}, {id: 1, name: 'Lucjusz', isDone: false}] ;
  id = 2;

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(taskName: string) {
    if (taskName) {
      this.tasks.push({id: this.id, name: taskName, isDone: false});
      this.id ++;
      console.log(this.tasks);
    }
  }
    removeTask(value, id) {
    if (value.id !== id) {
      console.log('valueId: ' + value.id + ' ' + id);
      return value;
    }
  }

  deleteTask(id: number) {
    console.log(this.tasks.filter(this.removeTask, id));
    this.tasks = this.tasks.filter(this.removeTask, id);
    console.log(id);
  }
}
