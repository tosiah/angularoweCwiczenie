import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codeBreakGame-app';


  toDoList = [{name: 'Trololo', isFinished: false}, {name: 'Kacperiusz', isFinished: true}];
  currentItem = '';

  number = 5;

   get isNumberPositive(): boolean {
     return this.number > 0;
   }

   get numberValue(): number {
     return this.number;
   }
   set numberValue(numberValue: number) {
     if (numberValue < 10) {
       this.number = numberValue;
     }
   }

  addElement() {
     console.log({name: this.currentItem, isFinished: false});
     console.log(this.toDoList);
     if (this.currentItem) {
       this.toDoList.push({name: this.currentItem, isFinished: false});
     }
  }

  incrementValue() {
    this.numberValue += 1;
  }
  decrementValue() {
    this.numberValue -= 1;
  }



}
