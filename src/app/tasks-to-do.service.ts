import { Injectable } from '@angular/core';
import { Task } from '../app/models/task.model';
import {element} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TasksToDoService {
  tasks: Task[] = [{id: 0, name: 'Kacperiusz', isDone: false}, {id: 1, name: 'Lucjusz', isDone: false}] ;
  private taskIndex = -1;
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

  deleteTask(id: number) {
    this.taskIndex = -1;
    for (let i = 0; this.tasks.length; i++) {
      this.searchElement(i, this.tasks, id);
      if (this.taskIndex !== -1) {
        this.tasks.splice(id, 1);
      }
    }
  }

  searchElement(index: number, array: Task[], id: number) {
    if (array[index].id === id) {
      this.taskIndex = id;
    }
  }

}
